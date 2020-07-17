import { connect } from 'react-redux';
import Navbar from './Navbar';
import { signOut } from '../../store/actions';
import { getUsername } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    username: getUsername(state),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signOut: () => dispatch(signOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
