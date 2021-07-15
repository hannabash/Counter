import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {ROUTES} from "./routeNames";
import CounterContainer from '../pages/CounterPage/containers/CounterContainer';
import HomePageContainer from '../pages/HomePage/container/HomePageContainer';

const Routes = () => {
   return (
      <Switch>
         <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
         <Route path={ROUTES.COUNTER_PAGE} component={CounterContainer}/>
      </Switch>
   );
};

export default Routes;
