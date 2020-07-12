import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DragonsList from '../pages/Dragons/DragonsList';

const Routes: React.FC = () => (
  <Switch>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={Login} />
    <Route path={process.env.PUBLIC_URL + '/signup'} exact component={Signup} />
    <Route path={process.env.PUBLIC_URL + '/dragons'} component={DragonsList} />
  </Switch>
);

export default Routes;
