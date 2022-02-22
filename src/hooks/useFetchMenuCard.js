import { useState, useEffect } from "react";
import { getMenuCard } from "../helpers/getMenuCard";

export const useFetchMenuCard = (ids) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getMenuCard(ids).then((rcps) => {
      setState({
        data: rcps,
        loading: false,
      });
    });
  }, [ids]);

  return state; // {data: [], loading: true}
};
