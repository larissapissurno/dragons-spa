import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DragonsList from '../pages/Dragons/DragonsList';
import DragonsCreate from '../pages/Dragons/DragonsCreate';
import DragonsUpdate from '../pages/Dragons/DragonsUpdate';

const Routes: React.FC = () => (
  <Switch>
    <Route
      exact
      path={process.env.PUBLIC_URL + '/'}
      render={() => <Redirect to={process.env.PUBLIC_URL + '/login'} />}
    />
    <Route path={process.env.PUBLIC_URL + '/login'} exact component={Login} />
    <Route path={process.env.PUBLIC_URL + '/signup'} exact component={Signup} />
    <Route
      exact
      path={process.env.PUBLIC_URL + '/dragons'}
      component={DragonsList}
    />
    <Route
      path={process.env.PUBLIC_URL + '/dragons/create'}
      component={DragonsCreate}
    />
    <Route
      path={process.env.PUBLIC_URL + '/dragons/:id'}
      component={DragonsUpdate}
    />
  </Switch>
);

export default Routes;
