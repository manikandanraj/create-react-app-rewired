import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const AuthRoute = ({ component, ...otherProps }) => {
  const isAuthenticated = !!sessionStorage.getItem('token');
  const { path } = otherProps;
  const isLoginPath = path === '/login';
  let route;

  if (isAuthenticated && isLoginPath) {
    route = <Redirect to="/" />;
  } else if (isAuthenticated && !isLoginPath) {
    route = <Route {...otherProps} component={component} />;
  } else if (!isAuthenticated && isLoginPath) {
    route = <Route {...otherProps} component={component} />;
  } else if (!isAuthenticated && !isLoginPath) {
    route = <Redirect to="/Login" />;
  }

  return route;
};

export default AuthRoute;
