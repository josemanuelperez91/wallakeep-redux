import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import * as reducers from './reducers';

export const history = createBrowserHistory();

const combineRootReducerWithConnectRouter = (history) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default function configureStore(config) {
  return function (preloadedState) {
    const store = createStore(
      combineRootReducerWithConnectRouter(history),
      preloadedState,
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history),
          thunk.withExtraArgument(config)
        )
      )
    );
    return store;
  };
}
