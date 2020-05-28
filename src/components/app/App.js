import React from 'react';
import './App.css';
import Register from '../register/Register';
import Login from '../login/connectedLogin';
import Home from '../home/Home';
import Detail from '../detail/Detail';
import Update from '../edit/connectedUpdate';
import Create from '../edit/connectedCreate';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../../history';

function App({ store, ...props }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/detail/:ID" component={Detail} />
            <Route path="/update/:ID" component={Update} />
            <Route path="/create" component={Create} />

            <Route>
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
