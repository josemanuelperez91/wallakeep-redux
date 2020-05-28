import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export function configureStore(config) {
  return function (preloadedState) {
    const store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
  };
}
