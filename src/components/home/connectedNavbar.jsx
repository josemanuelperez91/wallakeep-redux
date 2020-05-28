import { connect } from 'react-redux';
import Navbar from './Navbar';
import { signOut } from '../../store/actions';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signOut: () => dispatch(signOut()),
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
