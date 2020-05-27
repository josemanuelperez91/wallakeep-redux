import * as ACTION_TYPES from './actionTypes';

import APIService from '../services';

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
      dispatch(createAdSuccess(postedAd));
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
      dispatch(updateAdSuccess(updatedAd));
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

export const sigIn = (sigInData) =>
  async function (dispatch) {
    dispatch(signInReq());
    try {
      await APIService.signIn(sigInData);
      dispatch(signInSuccess(sigInData.username));
    } catch (error) {
      dispatch(signInFail(error));
    }
  };

export const signUpReq = () => ({
  type: ACTION_TYPES.SIGN_UP_REQUEST,
});
export const signUpSuccess = (username) => ({
  type: ACTION_TYPES.SIGN_UP_SUCCESS,
  username,
});
export const signUpFail = (error) => ({
  type: ACTION_TYPES.SIGN_UP_FAILURE,
  error,
});

export const sigUp = (sigUpData) =>
  async function (dispatch) {
    dispatch(signUpReq());
    try {
      await APIService.signUp(sigUpData);
      dispatch(signUpSuccess(sigUpData.username));
    } catch (error) {
      dispatch(signUpFail(error));
    }
  };
