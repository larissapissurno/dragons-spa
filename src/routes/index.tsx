import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={Login} />
  </Switch>
);

export default Routes;
