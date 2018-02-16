import { SET_USER, FAIL_REGISTER } from '../constants';

const initialState = {
    loggedIn: false,
    user: {},
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
        default:
            return state;
    }
};
