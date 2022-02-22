import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({
  id,
  title,
  image,
  vegan,
  healthScore,
  readyInMinutes,
  servings,
  pricePerServing,
  removeRecipe,
}) => {
  const handleDelete = () => {
    // let menuCard = JSON.parse(window.localStorage.getItem("menuCard"));
    // const removeRecipe = menuCard.filter((recipe) => recipe.id !== id);
    // window.localStorage.setItem("menuCard", JSON.stringify(removeRecipe));
    // console.log(removeRecipe);
    removeRecipe(id);
  };

  return (
    <div className="container card mb-3 w-50">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">is vegan ? {vegan ? "Yes" : "No"}</p>
            <p className="card-text">healthScore: {healthScore}</p>
            <p className="card-text">readyInMinutes: {readyInMinutes}</p>
            <p className="card-text">servings: {servings}</p>
            <p className="card-text">pricePerServing: {pricePerServing} $</p>
            <Link className="btn btn-warning me-2" to={`recipe/${id}`}>
              See More
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
