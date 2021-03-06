import axios from 'axios';
import {
    SET_USER,
    FAIL_REGISTER,
    FIX_REGISTER,
    REMOVE_USER,
    USER_PAGE,
    SEND_MESSAGE,
    GET_MESSAGES,
} from '../constants';

const setUserPage = payload => ({
    type: USER_PAGE,
    payload,
});

export const fixRegister = payload => ({
    type: FIX_REGISTER,
    payload,
});
export const setUser = payload => ({
    type: SET_USER,
    payload,
});
const failRegister = payload => ({
    type: FAIL_REGISTER,
    payload,
});
const removeUser = () => ({
    type: REMOVE_USER,
});
export const setMessages = payload => ({
    type: GET_MESSAGES,
    payload,
});

export const sendMessage = data => dispatch => axios.post('/api/send', data).then(res => res.data);

export const getMessages = data => dispatch =>
    axios
        .patch('/api/messages', data)
        .then(res => res.data)
        .then((res) => {
            dispatch(setMessages(res.messages));
            return res;
        });

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(removeUser());
};
export const getUserPage = username => dispatch =>
    axios
        .get(`/api/user/${username}`)
        .then(res => res.data)
        .then((res) => {
            dispatch(setUserPage(res));
            return res;
        });

export const fbCheck = data => dispatch => axios.post('/api/fbCheck', data).then(res => res.data);

export const fbAuth = data => dispatch =>
    axios
        .post('/api/fb', data)
        .then(res => res.data)
        .then((res) => {
            if (res.success) {
                dispatch(setUser({ user: res.user, token: res.token }));
                localStorage.setItem('token', res.token);
                return res;
            }
            dispatch(failRegister(res.error));
            return res;
        });

export const login = data => dispatch =>
    axios
        .post('/api/login', data)
        .then(res => res.data)
        .then((info) => {
            if (info.success) {
                dispatch(setUser({ user: info.user, token: info.token }));
                localStorage.setItem('token', info.token);
                return info;
            }
            dispatch(failRegister(info.error));
            return info;
        });

export const register = data => dispatch =>
    axios
        .post('/api/register', data)
        .then(res => res.data)
        .then((info) => {
            if (info.success) {
                dispatch(setUser({ user: info.user, token: info.token }));
                localStorage.setItem('token', info.token);
                return info;
            }
            dispatch(failRegister(info.error));
            return info;
        });
