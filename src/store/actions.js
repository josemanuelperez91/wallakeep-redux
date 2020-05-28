import * as ACTION_TYPES from './actionTypes';

import APIService from '../services';
import history from '../history';

export const fetchAdsReq = () => ({
  type: ACTION_TYPES.FETCH_ADS_REQUEST,
});
export const fetchAdsSuccess = (ads) => ({
  type: ACTION_TYPES.FETCH_ADS_SUCCESS,
  ads,
});
export const fetchAdsFail = (error) => ({
  type: ACTION_TYPES.FETCH_ADS_FAILURE,
  error,
});

export const fetchAds = (query) =>
  async function (dispatch) {
    dispatch(fetchAdsReq());
    try {
      const response = await APIService.getAds(query);

      dispatch(fetchAdsSuccess(response.results));
    } catch (error) {
      dispatch(fetchAdsFail(error));
    }
  };

export const createAdReq = () => ({
  type: ACTION_TYPES.CREATE_AD_REQUEST,
});
export const createAdSuccess = (ad) => ({
  type: ACTION_TYPES.CREATE_AD_SUCCESS,
  ad,
});
export const createAdFail = (error) => ({
  type: ACTION_TYPES.CREATE_AD_FAILURE,
  error,
});

export const createAd = (newAdData) =>
  async function (dispatch) {
    dispatch(createAdReq());
    try {
      const postedAd = await APIService.postAd(newAdData);
      dispatch(createAdSuccess(postedAd.result));
      history.push('/home');
    } catch (error) {
      dispatch(createAdFail(error));
    }
  };

export const updateAdReq = () => ({
  type: ACTION_TYPES.UPDATE_AD_REQUEST,
});
export const updateAdSuccess = (ad) => ({
  type: ACTION_TYPES.UPDATE_AD_SUCCESS,
  ad,
});
export const updateAdFail = (error) => ({
  type: ACTION_TYPES.UPDATE_AD_FAILURE,
  error,
});

export const updateAd = (adId, newAdData) =>
  async function (dispatch) {
    dispatch(updateAdReq());
    try {
      const updatedAd = await APIService.putAd(adId, newAdData);
      dispatch(updateAdSuccess(updatedAd.result));
      history.push('/home');
    } catch (error) {
      dispatch(updateAdFail(error));
    }
  };

export const signInReq = () => ({
  type: ACTION_TYPES.SIGN_IN_REQUEST,
});
export const signInSuccess = (username) => ({
  type: ACTION_TYPES.SIGN_IN_SUCCESS,
  username,
});
export const signInFail = (error) => ({
  type: ACTION_TYPES.SIGN_IN_FAILURE,
  error,
});

export const signIn = (signInData) =>
  async function (dispatch) {
    dispatch(signInReq());
    try {
      await APIService.signIn(signInData);
      dispatch(signInSuccess(signInData.username));
      localStorage.setItem('username', signInData.username);
      localStorage.setItem('isLoggedIn', true);
      history.push('/home');
    } catch (error) {
      dispatch(signInFail(error));
    }
  };

export const signOut = () =>
  async function (dispatch) {
    dispatch({
      type: ACTION_TYPES.SIGN_OUT,
    });
    localStorage.setItem('isLoggedIn', false);
    history.push('/login');
  };
