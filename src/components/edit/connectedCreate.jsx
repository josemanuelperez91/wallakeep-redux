import { connect } from 'react-redux';
import Create from './Create';
import { createAd } from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    createAd: (adData, username) => dispatch(createAd(adData, username)),
  };
}

export default connect(null, mapDispatchToProps)(Create);
