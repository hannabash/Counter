import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routeNames";
// import CounterContainer from "../pages/CounterPage/containers/";
import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounterPage/containers/FunctionalCounterContainer";
import ListsPageContainer from "../pages/ListsPage/containers/ListsPageContainer";
import CountersPageContainers from "../pages/CountersPage/containers/CountersPageContainer";
import ToDoListContainer from "../pages/ToDoList/containers/ToDoListContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      {/*<Route path={ROUTES.COUNTER_PAGE} component={CounterContainer} />*/}
      <Route
        exact
        path={ROUTES.FUNCTIONAL_PAGE}
        component={FunctionalCounterContainer}
      />
      <Route path={ROUTES.LISTS} component={ListsPageContainer} />
      <Route
        path={ROUTES.COUNTER_OF_COUNTERS}
        component={CountersPageContainers}
      />
      <Route
        path={ROUTES.TO_DO_LIST}
        component={ToDoListContainer}
      />
    </Switch>
  );
};

export default Routes;