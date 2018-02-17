import { GET_MESSAGES } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return action.payload;
        default:
            return state;
    }
};
