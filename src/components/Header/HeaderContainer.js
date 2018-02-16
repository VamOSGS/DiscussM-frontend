import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
    root: state.root,
});

const mapDispatchToProps = dispatch => ({});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
