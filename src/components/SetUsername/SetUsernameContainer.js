import { connect } from 'react-redux';
import SetUsername from './SetUsername';
import { fbAuth } from '../../actions';

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(fbAuth(data)),
});

const SetUsernameContainer = connect(null, mapDispatchToProps)(SetUsername);
export default SetUsernameContainer;
