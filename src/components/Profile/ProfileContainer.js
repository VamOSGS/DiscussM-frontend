import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    root: state.root
});

// const mapDispatchToProps = {};

const ProfileContainer = withRouter(connect(mapStateToProps)(Profile));
export default Profile;
