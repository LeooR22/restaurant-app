import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const RecipeSearchCard = ({
  id,
  title,
  image,
  vegan,
  pricePerServing,
  servings,
  healthScore,
  readyInMinutes,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          style={{ cursor: "pointer" }}
          alt={title}
          onClick={handleClick}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item mt-2">
            Diet: {vegan ? "Vegan" : "Omnivore"}
          </li>
          <li className="list-group-item mt-2">
            Price per serving: $ {pricePerServing}
          </li>
        </ul>

        <button className="btn btn-info w-100 mt-2" onClick={handleClick}>
          See more
        </button>
      </div>

      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <div className=""></div>
        <ul className="card-body list-group list-group-flush">
          <li className="list-group-item">
            Diet: {vegan ? "Vegan" : "Omnivore"}{" "}
          </li>
          <li className="list-group-item">
            Price per serving: $ {pricePerServing}
          </li>
          <li className="list-group-item">Servings: {servings}</li>
          <li className="list-group-item">healthScore: {healthScore}</li>
          <li className="list-group-item">readyInMinutes: {readyInMinutes}</li>
        </ul>
        <button className="btn btn-warning mt-2 w-100" onClick={handleClick}>
          See less
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default RecipeSearchCard;
