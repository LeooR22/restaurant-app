import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MenuScreen from "../components/restaurant/MenuScreen";
import SearchScreen from "../components/restaurant/SearchScreen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/" component={MenuScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
