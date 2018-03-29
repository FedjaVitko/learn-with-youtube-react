import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeView from "./HomeView";
import CourseView from "./CourseView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/courses/:courseName" component={CourseView} />
    </Switch>
  );
};

export default Routes;
