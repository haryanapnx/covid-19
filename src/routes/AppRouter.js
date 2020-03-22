import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("../pages/Dashboard/Dashboard"));
const FourHandedFourError = loadable(() =>
  import("../pages/FourHandedFourError")
);
const DashboardThree = loadable(() =>
  import("../pages/Dashboard/DashboardThree")
);
const Loader = loadable(() => import("../components/Common/Loader"));

const AppRouter = props => (
  <React.Suspense fallback={<Loader />}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={props => <Dashboard {...props} />} />
        <Route
          exact
          path="/countries/:slug"
          component={props => <DashboardThree {...props} />}
        />
        <Route component={props => <FourHandedFourError {...props} />} />
      </Switch>
    </React.Fragment>
  </React.Suspense>
);

export default withRouter(AppRouter);
