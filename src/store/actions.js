import * as ACTION_TYPES from './actionTypes';
import { push } from 'connected-react-router';
import { setLocale } from 'react-redux-i18n';

// import history from '../history';

const fetchAdsReq = () => ({
  type: ACTION_TYPES.FETCH_ADS_REQUEST,
});
const fetchAdsSuccess = (ads) => ({
  type: ACTION_TYPES.FETCH_ADS_SUCCESS,
  ads,
});
const fetchAdsFail = (error) => ({
  type: ACTION_TYPES.FETCH_ADS_FAILURE,
  error,
});

export const fetchAds = (query) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(fetchAdsReq());
    try {
      const response = await APIService.getAds(query);
      dispatch(fetchAdsSuccess(response));
    } catch (error) {
      dispatch(fetchAdsFail(error));
    }
  };

const fetchTagsReq = () => ({
  type: ACTION_TYPES.FETCH_TAGS_REQUEST,
});
const fetchTagsSuccess = (tags) => ({
  type: ACTION_TYPES.FETCH_TAGS_SUCCESS,
  tags,
});
const fetchTagsFail = (error) => ({
  type: ACTION_TYPES.FETCH_TAGS_FAILURE,
  error,
});

export const fetchTags = () =>
  async function (dispatch, getState, { APIService }) {
    dispatch(fetchTagsReq());
    try {
      const response = await APIService.getTags();
      dispatch(fetchTagsSuccess(response));
    } catch (error) {
      dispatch(fetchTagsFail(error));
    }
  };

const fetchUserAdsReq = () => ({
  type: ACTION_TYPES.FETCH_USER_ADS_REQUEST,
});
const fetchUserAdsSuccess = (ads) => ({
  type: ACTION_TYPES.FETCH_USER_ADS_SUCCESS,
  ads,
});
const fetchUserAdsFail = (error) => ({
  type: ACTION_TYPES.FETCH_USER_ADS_FAILURE,
  error,
});
export const fetchUserAds = (username) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(fetchUserAdsReq());
    try {
      const response = await APIService.getUserAds(username);
      dispatch(fetchUserAdsSuccess(response));
    } catch (error) {
      dispatch(fetchUserAdsFail(error));
    }
  };
const createAdReq = () => ({
  type: ACTION_TYPES.CREATE_AD_REQUEST,
});
const createAdSuccess = (ad) => ({
  type: ACTION_TYPES.CREATE_AD_SUCCESS,
  ad,
});
const createAdFail = (error) => ({
  type: ACTION_TYPES.CREATE_AD_FAILURE,
  error,
});

export const createAd = (newAdData) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(createAdReq());
    try {
      const postedAd = await APIService.postAd(newAdData);
      dispatch(createAdSuccess(postedAd.result));
      dispatch(push('/home'));
    } catch (error) {
      dispatch(createAdFail(error));
    }
  };

export const updateAdReq = () => ({
  type: ACTION_TYPES.UPDATE_AD_REQUEST,
});
export const updateAdSuccess = () => ({
  type: ACTION_TYPES.UPDATE_AD_SUCCESS,
});
export const updateAdFail = (error) => ({
  type: ACTION_TYPES.UPDATE_AD_FAILURE,
  error,
});

export const changeLocale = (locale) => {
  localStorage.setItem('locale', locale);
  return (dispatch) => dispatch(setLocale(locale));
};

export const updateAd = (adId, newAdData) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(updateAdReq());
    try {
      await APIService.putAd(adId, newAdData);
      dispatch(updateAdSuccess());
      // dispatch(showPopUp)
      alert('Anuncio actualizado');
      // dispatch(push('/home'));
    } catch (error) {
      console.log(error);
      dispatch(updateAdFail(error));
    }
  };

const signInReq = () => ({
  type: ACTION_TYPES.SIGN_IN_REQUEST,
});
const signInSuccess = (username) => ({
  type: ACTION_TYPES.SIGN_IN_SUCCESS,
  username,
});
const signInFail = (error) => ({
  type: ACTION_TYPES.SIGN_IN_FAILURE,
  error,
});

export const signIn = (signInData) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(signInReq());
    try {
      await APIService.signIn(signInData);
      dispatch(signInSuccess(signInData.username));
      localStorage.setItem('username', signInData.username);
      localStorage.setItem('isLoggedIn', true);
      dispatch(push('/home'));
    } catch (error) {
      dispatch(signInFail(error));
    }
  };

const getAdDetailsReq = () => ({
  type: ACTION_TYPES.GET_AD_DETAIL_REQUEST,
});
const getAdDetailsSuccess = (adDetails) => ({
  type: ACTION_TYPES.GET_AD_DETAIL_SUCCESS,
  adDetails,
});
const getAdDetailsFail = (error) => ({
  type: ACTION_TYPES.GET_AD_DETAIL_FAILURE,
  error,
});
export const getAdDetails = (AdUri) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(getAdDetailsReq());
    try {
      const response = await APIService.getAdDetails(AdUri);
      dispatch(getAdDetailsSuccess(response.result));
      return response;
    } catch (error) {
      dispatch(getAdDetailsFail(error));
    }
  };
const recoverReq = () => ({
  type: ACTION_TYPES.RECOVER_REQUEST,
});
const recoverSuccess = (username) => ({
  type: ACTION_TYPES.RECOVER_SUCCESS,
  username,
});
const recoverFail = (error) => ({
  type: ACTION_TYPES.RECOVER_FAILURE,
  error,
});
export const recoverPass = (email) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(recoverReq());
    try {
      await APIService.recoverPass(email);
      dispatch(recoverSuccess());
    } catch (error) {
      dispatch(recoverFail(error));
    }
  };

const signUpReq = () => ({
  type: ACTION_TYPES.SIGN_UP_REQUEST,
});
const signUpSuccess = (username) => ({
  type: ACTION_TYPES.SIGN_UP_SUCCESS,
  username,
});
const signUpFail = (error) => ({
  type: ACTION_TYPES.SIGN_UP_FAILURE,
  error,
});
export const signUp = (signUpData) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(signUpReq());
    try {
      await APIService.signUp(signUpData);
      dispatch(signUpSuccess());
      // dispatch(showPopUp)
      alert('cuenta creada ve a /login');
    } catch (error) {
      dispatch(signUpFail(error));
      // dispatch(showPopUp)
      alert(error);
    }
  };
export const signOut = () =>
  function (dispatch) {
    dispatch({
      type: ACTION_TYPES.SIGN_OUT,
    });
    localStorage.setItem('isLoggedIn', false);
    dispatch(push('/login'));
  };
