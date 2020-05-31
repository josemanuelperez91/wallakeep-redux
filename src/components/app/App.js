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
import AuthRoute from '../auth/connectedAuthRoute';

import history from '../../history';

function App({ store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <AuthRoute path="/home" component={Home} />
            <AuthRoute path="/detail/:ID" component={Detail} />
            <AuthRoute path="/update/:ID" component={Update} />
            <AuthRoute path="/create" component={Create} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
