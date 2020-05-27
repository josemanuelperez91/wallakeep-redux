import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(config) {
  return function (preloadedState) {
    const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
  };
}
