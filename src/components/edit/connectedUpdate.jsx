import { connect } from 'react-redux';
import Update from './Update';
import { updateAd } from '../../store/actions';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateAd: (data) => dispatch(updateAd(ownProps.match.params.ID, data)),
  };
}

export default connect(null, mapDispatchToProps)(Update);
