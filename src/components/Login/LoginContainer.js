import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import { login, fixRegister, fbCheck, fbAuth } from '../../actions';

const mapStateToProps = state => ({
    validate: state.validate,
});

const mapDispatchToProps = dispatch => ({
    onLogin: data => dispatch(login(data)),
    onFix: data => dispatch(fixRegister(data)),
    onCheck: data => dispatch(fbCheck(data)),
    onFbLogin: data => dispatch(fbAuth(data)),
});

const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
export default LoginContainer;
