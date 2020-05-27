import * as ACTION_TYPES from './actionTypes';

import APIService from '../services/API';

export const fetchBikesRequest = () => ({
  type: TYPES.FETCH_BIKES_REQUEST,
});

export const fetchBikesFailure = (error) => ({
  type: TYPES.FETCH_BIKES_FAILURE,
  error,
});

export const fetchBikesSuccess = (bikes) => ({
  type: TYPES.FETCH_BIKES_SUCCESS,
  bikes,
});

export const fetchBikes = () =>
  async function (dispatch, getState) {
    dispatch(fetchBikesRequest());
    try {
      const bikes = await BikesService.getAllBikes();
      dispatch(fetchBikesSuccess(bikes));
    } catch (error) {
      dispatch(fetchBikesFailure(error));
    }
  };
