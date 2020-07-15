import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from 'react-redux-i18n';
import { i18nReducer } from 'react-redux-i18n';

import * as reducers from './reducers';
import { translations } from '../locales/i18n';

import config from '../config';
const { SUPPORTED_LOCALES } = config;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  i18n: i18nReducer,
  ...reducers,
});

export default function configureStore(config) {
  return function (preloadedState) {
    const store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history),
          thunk.withExtraArgument(config)
        )
      )
    );
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translations));

    const storedLocale = localStorage.getItem('locale');
    const firstLocale = SUPPORTED_LOCALES[0];
    const preSelectedLocale = storedLocale ? storedLocale : firstLocale;

    store.dispatch(setLocale(preSelectedLocale));
    return store;
  };
}
