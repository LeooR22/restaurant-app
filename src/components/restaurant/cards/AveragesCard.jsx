import React from "react";

export const AveragesCard = ({ menuRecipes = [] }) => {
  console.log(menuRecipes);

  const findAverage = (arr, prop) => {
    if (Array.isArray(arr)) {
      return (
        arr.reduce((total, next) => total + next[prop], 0) / arr.length
      ).toFixed(2);
    } else {
      return 0;
    }
  };

  const findTotal = (arr, prop) => {
    //whole number
    if (Array.isArray(arr)) {
      return arr.reduce((total, next) => total + next[prop], 0);
    } else {
      return 0;
    }
  };

  const avgPricePerServing = findAverage(menuRecipes, "pricePerServing");

  const avgReadyInMinutes = findAverage(menuRecipes, "readyInMinutes");

  const avgHealthScore = findAverage(menuRecipes, "healthScore");

  const totalServings = findTotal(menuRecipes, "servings");

  const totalPriceMenu = (avgPricePerServing * totalServings).toFixed(2);

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
        <li class="list-group-item">pricePerServing: $ {avgPricePerServing}</li>
        <li class="list-group-item">Servings: {totalServings}</li>
        <li class="list-group-item">ReadyInMinutes: {avgReadyInMinutes}</li>
        <li class="list-group-item">healthScore average: {avgHealthScore}</li>
        <li class="list-group-item">Total price of menu: $ {totalPriceMenu}</li>
      </ul>
    </div>
  );
};
