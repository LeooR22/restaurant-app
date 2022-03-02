import React from "react";

export const Averages = ({ menuRecipes = [] }) => {
  console.log(menuRecipes);
  //   const { pricePerServing } = menuRecipes;
  //   console.log(pricePerServing);
  const avgPricePerServing = Array.isArray(menuRecipes)
    ? (
        menuRecipes.reduce((total, next) => total + next.pricePerServing, 0) /
        menuRecipes.length
      ).toFixed(2)
    : 0;
  // REDONDEAR DECIMALES

  const avgReadyInMinutes = Array.isArray(menuRecipes)
    ? (
        menuRecipes.reduce((total, next) => total + next.readyInMinutes, 0) /
        menuRecipes.length
      ).toFixed(2)
    : 0;

  const avgHealthScore = Array.isArray(menuRecipes)
    ? (
        menuRecipes.reduce((total, next) => total + next.healthScore, 0) /
        menuRecipes.length
      ).toFixed(2)
    : 0;

  const totalServings = Array.isArray(menuRecipes)
    ? menuRecipes.reduce((total, next) => total + next.servings, 0)
    : 0;

  return (
    <div class="card">
      <img
        src="https://i.pinimg.com/originals/52/af/64/52af64cde4187b5f2318c970aff24c3f.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">Menu Averages</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">pricePerServing: {avgPricePerServing}</li>
        <li class="list-group-item">Servings: {totalServings}</li>
        <li class="list-group-item">
          Total price of menu: ${" "}
          {(avgPricePerServing * totalServings).toFixed(2)}
        </li>
        <li class="list-group-item">healthScore average: {avgHealthScore}</li>
        <li class="list-group-item">ReadyInMinutes: {avgReadyInMinutes}</li>
      </ul>
    </div>
  );
};
