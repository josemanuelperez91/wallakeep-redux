import * as ACTION_TYPES from './actionTypes';

const initialState = {
  ads: [],
  login: {
    username: '',
    isLogged: false,
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
    case ACTION_TYPES.FETCH_GET_ADS_REQUEST:
      return action.ads;

    case ACTION_TYPES.FETCH_CREATE_AD_REQUEST:
      return state.push(action.ad);

    case ACTION_TYPES.FETCH_UPDATE_AD_REQUEST:
      return updateAd(state, action.ad);

    default:
      return state;
  }
}
export function login(state = initialState.login, action) {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        username: action.username,
        isLogged: true,
      };

    default:
      return state;
  }
}
