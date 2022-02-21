import React from "react";
import { Link } from "react-router-dom";

const RecipeSearchCard = ({ id, title, image, vegan, pricePerServing }) => {
  // let menuCard = [];

  const handleAddToMenu = () => {
    if (JSON.parse(window.localStorage.getItem("menuCard")) === null) {
      let menuCard = [
        {
          id,
          vegan,
        },
      ];
      window.localStorage.setItem("menuCard", JSON.stringify(menuCard));
    } else {
      let menuCard = JSON.parse(window.localStorage.getItem("menuCard"));
      let menuVegan = menuCard.filter((recipe) => recipe.vegan === true);
      let menuOmnivore = menuCard.filter((recipe) => recipe.vegan === false);

      const pushToMenu = () => {
        menuCard.push({ id, vegan });
        window.localStorage.setItem("menuCard", JSON.stringify(menuCard));
        console.log(menuCard);
      };

      if (
        !(menuVegan.length < 2 && vegan === true) &&
        !(menuOmnivore.length < 2 && vegan === false)
      ) {
        return console.log(
          `Menu ${vegan ? "vegano" : "omnivoro"} lleno, elimine alguno del menu`
        );
      }

      pushToMenu();
    }
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5>Is vegan ? {vegan ? "yes" : "no"} </h5>
          <h5>Price per serving: $ {pricePerServing}</h5>
          <button className="btn btn-primary mb-2" onClick={handleAddToMenu}>
            Add to menu
          </button>
          <Link className="btn btn-warning" to={`recipe/${id}`}>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearchCard;
