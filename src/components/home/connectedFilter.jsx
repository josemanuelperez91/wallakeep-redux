import { connect } from 'react-redux';
import Filter from './Filter';
import { getAds } from '../../store/selectors';
import { fetchAds } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadAds: (query) => dispatch(fetchAds(query)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
