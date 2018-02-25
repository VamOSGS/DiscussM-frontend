import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fbCheck, fbAuth } from '../../actions';
import Facebook from './Facebook';

const mapDispatchToProps = dispatch => ({
    onCheck: data => dispatch(fbCheck(data)),
    onFbLogin: data => dispatch(fbAuth(data)),
});

const FacebookContainer = withRouter(connect(null, mapDispatchToProps)(Facebook));
export default FacebookContainer;
