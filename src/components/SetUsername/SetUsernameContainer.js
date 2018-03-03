import { connect } from 'react-redux';
import SetUsername from './SetUsername';
import { fbAuth, fixRegister } from '../../actions';

const mapStateToProps = state => ({
    validate: state.validate,
});

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(fbAuth(data)),
    onFix: data => dispatch(fixRegister(data)),
});

const SetUsernameContainer = connect(mapStateToProps, mapDispatchToProps)(SetUsername);
export default SetUsernameContainer;
