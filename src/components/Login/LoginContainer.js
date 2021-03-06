import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import { login, fixRegister } from '../../actions';

const mapStateToProps = state => ({
    validate: state.validate,
});

const mapDispatchToProps = dispatch => ({
    onLogin: data => dispatch(login(data)),
    onFix: data => dispatch(fixRegister(data)),
});

const LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
export default LoginContainer;
