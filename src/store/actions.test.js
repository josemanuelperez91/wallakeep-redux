import * as actions from './actions';
import * as ACTION_TYPES from './actionTypes';
import APIService from '../services';
jest.mock('../services');

const ad = {
  name: 'test ad',
  price: '10',
  photo: 'https://test.com/testad.png',
  type: 'sell',
  description: 'this is a test ad',
};
describe('sync actions', () => {
  describe('updateAdSuccess', () => {
    it('Should generate a UPDATE_AD_SUCCESS action', () => {
      const expected = {
        type: ACTION_TYPES.UPDATE_AD_SUCCESS,
        ad,
      };
      expect(actions.updateAdSuccess(ad)).toEqual(expected);
    });
  });
});

describe('async actions', () => {
  describe('postAd', () => {
    const dispatch = jest.fn();
    const response = {
      success: true,
      result: {
        ...ad,
        _id: '1234',
      },
    };
    APIService.postAd.mockResolvedValueOnce(response);

    it('Should dispatch the following actions: CREATE_AD_REQUEST,CREATE_AD_SUCCESS', async () => {
      await actions.createAd(ad)(dispatch, {
        services: { APIService },
      });
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ACTION_TYPES.CREATE_AD_REQUEST,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ACTION_TYPES.CREATE_AD_SUCCESS,
        ad: { ...response.result },
      });
    });
  });
});
