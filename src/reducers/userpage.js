import { USER_PAGE } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_PAGE:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};
