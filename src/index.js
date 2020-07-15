import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import APIService from './services';

import * as serviceWorker from './serviceWorker';

import configureStore, { history } from './store';

let username = localStorage.getItem('username');
let isLoggedIn = localStorage.getItem('isLoggedIn');

if (username === null) username = '';
if (isLoggedIn === null) {
  isLoggedIn = false;
} else {
  isLoggedIn = isLoggedIn === 'true';
}

const preloadedState = {
  login: {
    username,
    isLoggedIn,
  },
};
const store = configureStore({ APIService })(preloadedState);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
