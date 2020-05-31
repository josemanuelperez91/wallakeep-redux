import AuthRoute from './AuthRoute';
import { getIsLoggedIn } from '../../store/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getIsLoggedIn(state),
  };
};
export default connect(mapStateToProps)(AuthRoute);
