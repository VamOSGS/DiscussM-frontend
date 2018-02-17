import axios from 'axios';
import {
    SET_USER,
    FAIL_REGISTER,
    FIX_REGISTER,
    REMOVE_USER,
    GET_MESSAGES
} from '../constants';

export const fixRegister = payload => ({
    type: FIX_REGISTER,
    payload
});
export const setUser = payload => ({
    type: SET_USER,
    payload
});
const failRegister = payload => ({
    type: FAIL_REGISTER,
    payload
});
const removeUser = () => ({
    type: REMOVE_USER
});
export const setMessages = payload => ({
    type: GET_MESSAGES,
    payload
});
export const getMessages = data => dispatch =>
    axios
        .patch('http://localhost:8000/messages', data)
        .then(res => res.data)
        .then(d => {
            dispatch(setMessages(d.messages));
        });

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch(removeUser());
};
export const login = data => dispatch =>
    axios
        .post('http://localhost:8000/login', data)
        .then(res => res.data)
        .then(info => {
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
        .post('http://localhost:8000/register', data)
        .then(res => res.data)
        .then(info => {
            if (info.success) {
                dispatch(setUser({ user: info.user, token: info.token }));
                localStorage.setItem('token', info.token);
                return info;
            }
            dispatch(failRegister(info.error));
            return info;
        });
