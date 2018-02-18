import { connect } from 'react-redux';
import SendMessage from './SendMessage';

const mapStateToProps = state => ({
    userpage: state.userpage
});

const mapDispatchToProps = dispatch => ({});

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(
    SendMessage
);
export default SendMessageContainer;
