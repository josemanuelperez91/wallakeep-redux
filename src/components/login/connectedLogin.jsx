import { connect } from 'react-redux';
import Login from './Login';
import { signIn, changeLocale } from '../../store/actions';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    signIn: (data) => dispatch(signIn(data)),
    changeLocale: (locale) => dispatch(changeLocale(locale)),
  };
}
// const mapStateToProps = (state) => {
//   return {
//     t: getTranslations(state, 'Login'),
//   };
// };
export default connect(null, mapDispatchToProps)(Login);
