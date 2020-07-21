import { connect } from 'react-redux';
import Footer from './Footer';
import { changeLocale } from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: (locale) => dispatch(changeLocale(locale)),
  };
}
export default connect(null, mapDispatchToProps)(Footer);
