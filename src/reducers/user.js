import { SET_USER, FAIL_REGISTER, REMOVE_USER } from '../constants';

const initialState = {
    loggedIn: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case REMOVE_USER:
            return {
                ...state,
                loggedIn: false,
                user: {},
                token: ''
            };
        default:
            return state;
    }
};
