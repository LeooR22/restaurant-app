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
    <>
      <h3>Menu Averages</h3>
      <span className="mb-1">pricePerServing: {avgPricePerServing} </span>
      <span className="mb-1">Servings: {totalServings}</span>
      <span className="mb-1">
        Total price of menu: {(avgPricePerServing * totalServings).toFixed(2)}
      </span>
      <span className="mb-1">healthScore average: {avgHealthScore}</span>
      <span className="mb-1">ReadyInMinutes: {avgReadyInMinutes} </span>
    </>
  );
};
