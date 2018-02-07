import React from 'react';
import { Switch } from 'react-router-dom';

import AuthRoute from '../../components/AuthRoute/AuthRoute';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';

const App = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/home" component={Home} />
      </Switch>
    </div>
  </div>
);

export default App;
