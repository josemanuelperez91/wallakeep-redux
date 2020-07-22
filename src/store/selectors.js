export const getAds = (state) => state.ads;
export const getUsername = (state) => state.login.username;
export const getIsLoggedIn = (state) => state.login.isLoggedIn;
const _ = require('lodash');

export const getAdDetails = (state, ID) => {
  const storedAD = state.ads.filter((ad) => (ad._id === ID ? ad : null))[0];
  if (!_.isEmpty(storedAD)) {
    return storedAD;
  }
  return state.adDetails;
};

// export const getTranslations = (state, Component) => {
//   const locale = state.i18n.locale;
//   const translations = state.i18n.translations[locale][Component];
//   return translations;
// };
