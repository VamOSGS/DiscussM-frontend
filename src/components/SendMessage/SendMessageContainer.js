import { connect } from 'react-redux';
import SendMessage from './SendMessage';
import { sendMessage } from '../../actions';

const mapStateToProps = state => ({
    userpage: state.userpage
});

const mapDispatchToProps = dispatch => ({
    onSend: data => dispatch(sendMessage(data))
});

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(
    SendMessage
);
export default SendMessageContainer;
