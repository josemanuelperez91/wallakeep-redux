import { connect } from 'react-redux';
import Update from './Update';
import { updateAd, deleteAd } from '../../store/actions';
import { getAdDetails } from '../../store/selectors';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateAd: (data) => dispatch(updateAd(ownProps.match.params.ID, data)),
    deleteAd: () => dispatch(deleteAd(ownProps.match.params.ID)),
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    adDetails: getAdDetails(state, ownProps.match.params.ID),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);
