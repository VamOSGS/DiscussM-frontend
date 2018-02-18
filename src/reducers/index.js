import { combineReducers } from 'redux';
import user from './user';
import userpage from './userpage';
import validate from './validate';
import messages from './messages';

export default combineReducers({
    user,
    validate,
    userpage,
    messages,
});
