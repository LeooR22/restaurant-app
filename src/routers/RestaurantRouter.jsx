import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MenuScreen from "../components/restaurant/menu/MenuScreen";
import { RecipeScreen } from "../components/restaurant/recipe/RecipeScreen";
import SearchScreen from "../components/restaurant/search/SearchScreen";

const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/" component={MenuScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/recipe/:recipeId" component={RecipeScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default AuthRouter;
