import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import loadable from "@loadable/component";
import ContentLoader from "react-content-loader";

const AppRouter = () => (
  <React.Suspense fallback={<ContentLoader />}>
    <Switch>
      <Route exact path="/" component={props => <Dashboard {...props} />} />
      <Route
        exact
        path="/countries/:slug"
        component={props => <DashboardThree {...props} />}
      />
      <Route component={props => <FourHandedFourError {...props} />} />
    </Switch>
  </React.Suspense>
);

export default withRouter(AppRouter);

const Dashboard = loadable(() => import("../pages/Dashboard/Dashboard"), {
  fallback: <ContentLoader />
});
const FourHandedFourError = loadable(
  () => import("../pages/FourHandedFourError"),
  {
    fallback: <ContentLoader />
  }
);
const DashboardThree = loadable(
  () => import("../pages/Dashboard/DashboardThree"),
  {
    fallback: <ContentLoader />
  }
);
