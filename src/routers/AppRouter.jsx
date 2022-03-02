import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, BrowserRouter as Router, Switch } from "react-router-dom";
import { login } from "../actions/auth";
import Loading from "../components/ui/loading/Loading";

import { firebase } from "../firebase/firebase-config";
import AuthRouter from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import RestaurantRouter from "./RestaurantRouter";

const AppRouter = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const isLoggedIn = false;

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <Loading />;
  }

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
