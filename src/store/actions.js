import * as ACTION_TYPES from './actionTypes';
import { push } from 'connected-react-router';
import { setLocale } from 'react-redux-i18n';
import config from '../config';
import sha256 from 'crypto-js/sha256';
import firebase from '../config/firebaseStore';

async function handleImageUpload(imageData) {
  const storage = firebase.storage();
  const storageRef = storage.ref();

  const imageName = sha256(imageData);
  const imagesRef = storageRef.child(config.AD_IMAGE_BUCKET_NAME + imageName);
  const imageUploadSnapshot = await imagesRef.putString(imageData, 'data_url');
  const uploadedImageURL = await imageUploadSnapshot.ref.getDownloadURL();
  return uploadedImageURL;
}

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

export const fetchTags = (query) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(fetchTagsReq());
    try {
      const response = await APIService.getTags(query);
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
export const fetchUserAds = (username, query) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(fetchUserAdsReq());
    try {
      const response = await APIService.getUserAds(username, query);
      dispatch(fetchUserAdsSuccess(response));
    } catch (error) {
      dispatch(fetchUserAdsFail(error));
    }
  };
const createAdReq = () => ({
  type: ACTION_TYPES.CREATE_AD_REQUEST,
});
const createAdSuccess = (adDetails) => ({
  type: ACTION_TYPES.CREATE_AD_SUCCESS,
  adDetails,
});
const createAdFail = (error) => ({
  type: ACTION_TYPES.CREATE_AD_FAILURE,
  error,
});

export const createAd = (newAdData, username) =>
  async function (dispatch, getState, { APIService }) {
    try {
      const uploadedImageURL = await handleImageUpload(newAdData.image);
      const { name, price, description, sale, tags } = newAdData;
      dispatch(createAdReq());
      const postedAd = await APIService.postAd({
        name,
        price,
        description,
        sale,
        tags,
        image: uploadedImageURL,
        username,
      });
      dispatch(createAdSuccess(postedAd.result));
      const confirmHome = window.confirm(
        'Ad published succesfully, return to your panel?'
      );
      if (confirmHome) {
        dispatch(push('/myaccount'));
      } else {
        dispatch(push('/create'));
      }
    } catch (error) {
      dispatch(createAdFail(error));
    }
  };

export const changeLocale = (locale) => {
  localStorage.setItem('locale', locale);
  return (dispatch) => dispatch(setLocale(locale));
};

export const updateAdReq = () => ({
  type: ACTION_TYPES.UPDATE_AD_REQUEST,
});
export const updateAdSuccess = (adDetails) => ({
  type: ACTION_TYPES.UPDATE_AD_SUCCESS,
  adDetails,
});
export const updateAdFail = (error) => ({
  type: ACTION_TYPES.UPDATE_AD_FAILURE,
  error,
});
export const updateAd = (adId, newAdData) =>
  async function (dispatch, getState, { APIService }) {
    try {
      let uploadedImageURL = newAdData.image;
      if (newAdData.image.startsWith('data:')) {
        uploadedImageURL = await handleImageUpload(newAdData.image);
      }

      const { name, price, description, sale, tags } = newAdData;
      dispatch(updateAdReq());
      const sanetizedAdData = {
        name,
        price,
        description,
        sale,
        tags,
        image: uploadedImageURL,
      };
      await APIService.putAd(adId, sanetizedAdData);
      dispatch(updateAdSuccess(sanetizedAdData));
      // dispatch(showPopUp)
      const confirmHome = window.confirm(
        'Ad updated succesfully, return to your panel?'
      );
      if (confirmHome) {
        dispatch(push('/myaccount'));
      }
    } catch (error) {
      dispatch(updateAdFail(error));
    }
  };

const deleteAdReq = () => ({
  type: ACTION_TYPES.DELETE_AD_REQUEST,
});
const deleteAdSuccess = () => ({
  type: ACTION_TYPES.DELETE_AD_SUCCESS,
});
const deleteAdFail = (error) => ({
  type: ACTION_TYPES.DELETE_AD_FAILURE,
  error,
});
export const deleteAd = (adId) =>
  async function (dispatch, getState, { APIService }) {
    dispatch(deleteAdReq());
    try {
      await APIService.deleteAd(adId);
      dispatch(deleteAdSuccess());
      // dispatch(showPopUp)
      dispatch(push('/myaccount'));
    } catch (error) {
      console.log(error);
      dispatch(deleteAdFail(error));
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
      alert('Incorrect Log In Data');
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
