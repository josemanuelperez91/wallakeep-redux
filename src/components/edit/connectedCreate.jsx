import { connect } from 'react-redux';
import Create from './Create';
import { createAd } from '../../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    createAd: (params) => dispatch(createAd(params)),
  };
}

export default connect(null, mapDispatchToProps)(Create);
