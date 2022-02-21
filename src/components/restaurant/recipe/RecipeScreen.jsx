import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../../helpers/getRecipeById";
import { useFetchRecipeById } from "../../../hooks/useFetchRecipeById";
// import getHeroById from "../../helpers/getHeroById";

export const RecipeScreen = () => {
  const { recipeId } = useParams();
  let history = useHistory();

  console.log(recipeId);

  const { data, loading } = useFetchRecipeById(recipeId);
  console.log(data);
  console.log(loading);
  const {
    image,
    title,
    healthScore,
    servings,
    vegan,
    readyInMinutes,
    pricePerServing,
  } = data;

  const handleBackPage = () => {
    history.goBack();
  };

  return (
    <div className="container">
      <div className="container row mt-5">
        <div className="col-4">
          <img
            src={image}
            alt={title}
            className="img-thumbnail animate__animated animate__bounceInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{title}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Is vegan ?</b>
              {vegan ? "Yes" : "No"}
            </li>
            <li className="list-group-item">
              <b>healthScore: </b>
              {healthScore}
            </li>
            <li className="list-group-item ">
              <b>servings: </b>
              {servings}
            </li>
            <li className="list-group-item ">
              <b>readyInMinutes: </b>
              {readyInMinutes}
            </li>
            <li className="list-group-item ">
              <b>pricePerServing: </b>
              {pricePerServing}
            </li>
          </ul>

          <button onClick={handleBackPage} className="btn btn-info ms-3 mt-3">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
