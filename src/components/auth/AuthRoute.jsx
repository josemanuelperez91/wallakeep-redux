import React from 'react';
import { Redirect, Route } from 'react-router-dom';
function AuthRoute({ isLoggedIn, ...props }) {
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
}

export default AuthRoute;
