import { connect } from 'react-redux';
import Update from './Update';
import { updateAd, deleteAd } from '../../store/actions';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateAd: (data) => dispatch(updateAd(ownProps.match.params.ID, data)),
    deleteAd: () => dispatch(deleteAd(ownProps.match.params.ID)),
  };
}

export default connect(null, mapDispatchToProps)(Update);
