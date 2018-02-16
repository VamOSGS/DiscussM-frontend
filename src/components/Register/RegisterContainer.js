import { connect } from 'react-redux';
import Register from './Register';
import { register, fixRegister } from '../../actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    onRegister: data => dispatch(register(data)),
    onFix: (data) => {
        dispatch(fixRegister(data));
    },
});
const mapStateToProps = state => ({
    root: state.root,
    validate: state.validate,
});

const RegisterContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
export default RegisterContainer;
