import { connect } from 'react-redux';
import Regiser from './Register';
import { signUp, changeLocale } from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    signUp: (data) => dispatch(signUp(data)),
    changeLocale: (locale) => dispatch(changeLocale(locale)),
  };
}
// const mapStateToProps = (state) => {
//   return {
//     t: getTranslations(state, 'Login'),
//   };
// };
export default connect(null, mapDispatchToProps)(Regiser);
