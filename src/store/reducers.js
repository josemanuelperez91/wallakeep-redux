import * as ACTION_TYPES from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  ads: [],
  login: {
    username: '',
    isLoggedIn: false,
  },
};

const updateAd = (ads, newAd) => {
  return ads.map((ad) => {
    if (ad._id === newAd._id) {
      return {
        ...newAd,
      };
    }
    return ad;
  });
};

function ads(state = initialState.ads, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ADS_SUCCESS:
      return action.ads;

    case ACTION_TYPES.CREATE_AD_SUCCESS:
      state.push(action.ad);
      return state;

    case ACTION_TYPES.UPDATE_AD_SUCCESS:
      return updateAd(state, action.ad);

    default:
      return state;
  }
}
function login(state = initialState.login, action) {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        username: action.username,
        isLoggedIn: true,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  ads,
  login,
});

export default rootReducer;
