import { connect } from 'react-redux';
import Messages from './Messages';
import { getMessages } from '../../actions';

const mapStateToProps = state => ({
    messages: state.messages
});
const mapDispatchToProps = dispatch => ({
    onGetMessages: data => dispatch(getMessages(data))
});

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(
    Messages
);
export default MessagesContainer;
