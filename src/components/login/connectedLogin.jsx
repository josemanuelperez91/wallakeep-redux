import { connect } from 'react-redux';
import Login from './Login';
import { signIn } from '../../store/actions';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn: (data) => dispatch(signIn(data)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
