import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getMessages } from '../../actions';

const mapStateToProps = state => ({
    root: state.root
});
const mapDispatchToProps = dispatch => ({
    onGetMessages: data => dispatch(getMessages(data))
});

const ProfileContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Profile)
);
export default ProfileContainer;
