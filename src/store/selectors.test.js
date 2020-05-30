import { getUsername } from './selectors';

const state = {
  ads: [],
  login: {
    username: 'testuser',
    isLoggedIn: true,
  },
};

describe('selectors', () => {
  describe('getUsername', () => {
    it('Should return the proper state value', () => {
      const expectedValue = 'testuser';
      expect(getUsername(state)).toEqual(expectedValue);
    });
    it('Should throw an error', () => {
      expect(() => getUsername()).toThrowError();
    });
  });
});
