import { combineReducers } from 'redux';
import root from './root';
import validate from './validate';
import messages from './messages';

export default combineReducers({
    root,
    validate,
    messages,
});
