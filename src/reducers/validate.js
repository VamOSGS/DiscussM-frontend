import { FAIL_REGISTER, FIX_REGISTER } from '../constants';

const initialState = {
    username: '',
    email: '',
    password: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FAIL_REGISTER:
            return {
                ...state,
                [action.payload.field]: action.payload.message
            };
        case FIX_REGISTER:
            return {
                ...state,
                [action.payload]: ''
            };
        default:
            return state;
    }
};
