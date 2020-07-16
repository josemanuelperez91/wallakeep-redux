import * as ACTION_TYPES from './actionTypes';

const initialState = {
  ads: [],
  adDetails: {},
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

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ADS_SUCCESS:
      return action.ads;

    case ACTION_TYPES.CREATE_AD_SUCCESS:
      const newState = state.concat(action.ad);
      return newState;

    case ACTION_TYPES.UPDATE_AD_SUCCESS:
      return updateAd(state, action.ad);

    default:
      return state;
  }
}
export function adDetails(state = initialState.adDetails, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_AD_DETAIL_SUCCESS:
      return action.adDetails;
    default:
      return state;
  }
}

export function login(state = initialState.login, action) {
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
