import React from "react";
import { Link } from "react-router-dom";

const RecipeSearchCard = ({ id, title, image }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button className="btn btn-primary mb-2">Add to menu</button>
          <Link className="btn btn-warning" to={`recipe/${id}`}>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearchCard;
