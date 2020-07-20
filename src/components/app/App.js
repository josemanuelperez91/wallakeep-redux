import React from 'react';
import './App.css';
import Register from '../register/connectedRegister';
import Recovery from '../recovery/connectedRecovery';
import Login from '../login/connectedLogin';
import Home from '../home/Home';
import Detail from '../detail/Detail';
import User from '../user/User';
import MyAccount from '../user/MyAccount';
import Update from '../edit/connectedUpdate';
import Create from '../edit/connectedCreate';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from '../auth/connectedAuthRoute';
import { ConnectedRouter } from 'connected-react-router';

function App({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/recovery" component={Recovery} />
            <Route path="/login" component={Login} />
            <Route path="/users/:username" component={User} />
            <Route path="/home" component={Home} />
            <Route path="/detail/:ID" component={Detail} />
            <AuthRoute path="/myaccount" component={MyAccount} />
            <AuthRoute path="/update/:ID" component={Update} />
            <AuthRoute path="/create" component={Create} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
