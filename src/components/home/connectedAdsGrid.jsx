import { connect } from 'react-redux';
import AdsGrid from './AdsGrid';
import { getAds } from '../../store/selectors';

function mapStateToProps(state, ownProps) {
  return {
    ads: getAds(state),
  };
}

export default connect(mapStateToProps, null)(AdsGrid);
