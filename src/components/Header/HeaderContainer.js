import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { setUser, logout } from '../../actions';

const mapStateToProps = state => ({
    root: state.root
});

const mapDispatchToProps = dispatch => ({
    onSetUser: data => dispatch(setUser(data)),
    onLogOut: () => dispatch(logout())
});

const HeaderContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
);
export default HeaderContainer;
