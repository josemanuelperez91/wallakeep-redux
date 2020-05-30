import rootReducer from './reducers';
import * as ACTION_TYPES from './actionTypes';

const ad = {
  _id: '1234',
  name: 'test ad',
  price: '10',
  photo: 'https://test.com/testad.png',
  type: 'sell',
  description: 'this is a test ad',
};
const initialState = { ads: [], login: {} };

describe('reducers', () => {
  describe('ads', () => {
    it('Should handle a FETCH_ADS_SUCCESS action', () => {
      const ads = [ad, ad, ad];
      const action = {
        type: ACTION_TYPES.FETCH_ADS_SUCCESS,
        ads,
      };
      const expectedState = {
        ...initialState,
        ads,
      };
      expect(rootReducer(initialState, action)).toEqual(expectedState);
    });
  });
});
