import React from "react";
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import RestaurantRouter from "./RestaurantRouter";

const AppRouter = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = true;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticated={isLoggedIn}
            component={AuthRouter}
          />

          <PrivateRoute
            isAuthenticated={isLoggedIn}
            path="/"
            component={RestaurantRouter}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
