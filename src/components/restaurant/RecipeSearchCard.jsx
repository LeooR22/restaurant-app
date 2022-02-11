import React from "react";

const RecipeSearchCard = ({ id, title, image }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button className="btn btn-primary mb-2">Add to menu</button>
          <button className="btn btn-warning">See More</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearchCard;
