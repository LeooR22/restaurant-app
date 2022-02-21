import { useState, useEffect } from "react";
import { getRecipeSearch } from "../helpers/getRecipeSearch";

export const useFetchRecipes = (recipe) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getRecipeSearch(recipe).then((rcps) => {
      setState({
        data: rcps,
        loading: false,
      });
    });
  }, [recipe]);

  return state; // {data: [], loading: true}
};
