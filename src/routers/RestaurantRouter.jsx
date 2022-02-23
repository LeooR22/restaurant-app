import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MenuScreen from "../components/restaurant/menu/MenuScreen";
import { RecipeScreen } from "../components/restaurant/recipe/RecipeScreen";
import { SearchScreen } from "../components/restaurant/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

const AuthRouter = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={MenuScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route exact path="/recipe/:recipeId" component={RecipeScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default AuthRouter;
