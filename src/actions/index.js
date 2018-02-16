import axios from 'axios';
import { SET_USER, FAIL_REGISTER, FIX_REGISTER } from '../constants';

export const fixRegister = payload => ({
    type: FIX_REGISTER,
    payload
});
const setUser = payload => ({
    type: SET_USER,
    payload
});
const failRegister = payload => ({
    type: FAIL_REGISTER,
    payload
});

export const login = data => dispatch =>
    axios
        .post('http://localhost:8000/login', data)
        .then(res => res.data)
        .then(info => {
            console.log(info);
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
            console.log(info);
            if (info.success) {
                dispatch(setUser({ user: info.user, token: info.token }));
                localStorage.setItem('token', info.token);
                return info;
            }
            dispatch(failRegister(info.error));
            return info;
        });
