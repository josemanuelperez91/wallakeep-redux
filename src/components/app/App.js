import React from 'react';
import './App.css';
import Register from '../register/Register';
import Login from '../login/Login';
import Home from '../home/Home';
import Detail from '../detail/Detail';
import Update from '../edit/Update';
import Create from '../edit/Create';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
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
  );
}

export default App;
