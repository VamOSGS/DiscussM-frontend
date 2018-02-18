import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getMessages, getUserPage } from '../../actions';

const mapStateToProps = state => ({
    user: state.user,
    userpage: state.userpage
});
const mapDispatchToProps = dispatch => ({
    onGetMessages: data => dispatch(getMessages(data)),
    onGetUserPage: username => dispatch(getUserPage(username)),
});

const ProfileContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Profile)
);
export default ProfileContainer;
