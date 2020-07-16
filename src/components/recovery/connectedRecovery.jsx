import { connect } from 'react-redux';
import Recovery from './Recovery';
import { recoverPass, changeLocale } from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    recoverPass: (data) => dispatch(recoverPass(data)),
    changeLocale: (locale) => dispatch(changeLocale(locale)),
  };
}

export default connect(null, mapDispatchToProps)(Recovery);
