import { useState, useEffect } from "react";
import { getRecipeById } from "../helpers/getRecipeById";

export const useFetchRecipeById = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getRecipeById(id).then((rcps) => {
      setState({
        data: rcps,
        loading: false,
      });
    });
  }, [id]);

  return state; // {data: [], loading: true}
};
