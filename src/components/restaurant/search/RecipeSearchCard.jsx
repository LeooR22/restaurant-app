import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RecipeSearchCard = ({ id, title, image, vegan, pricePerServing }) => {
  // console.log(id);
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
      Swal.fire(
        "Added !",
        `dish ${title} has been added to the ${
          vegan ? "vegan" : "omnivore"
        } menu`,
        "success"
      );
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
        return Swal.fire({
          icon: "error",
          title: `Oops... The ${vegan ? "vegan" : "omnivore"} menu is complete`,
          text: "if you want to change the dish, go to the beginning and delete one of the same menu",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }

      pushToMenu();
      Swal.fire(
        "Added !",
        `dish ${title} has been added to the ${
          vegan ? "vegan" : "omnivore"
        } menu`,
        "success"
      );
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
