import React, { useEffect, useState } from "react";
import { useFetchMenuCard } from "../../../hooks/useFetchMenuCard";
import { RecipeCard } from "./RecipeCard";
import Swal from "sweetalert2";

const MenuScreen = () => {
  const [menuCard, setMenuCard] = useState([]);

  useEffect(() => {
    console.log("Leer todos local");
    if (localStorage.getItem("menuCard")) {
      setMenuCard(JSON.parse(localStorage.getItem("menuCard")));
    }
  }, []);

  useEffect(() => {
    console.log("Guardar todo local");
    localStorage.setItem("menuCard", JSON.stringify(menuCard));
  }, [menuCard]);

  const removeRecipe = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The dish will be removed from the menu!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your dish has been deleted.", "success");
        setMenuCard(menuCard.filter((recipe) => recipe.id !== id));
      }
    });
  };

  // const menuCard = JSON.parse(window.localStorage.getItem("menuCard"));
  let arrayIdMenuCard = menuCard?.map((obj) => obj.id);
  const idsMenuCard = arrayIdMenuCard?.join(",");
  console.log(idsMenuCard);
  const { data: menuRecipes, loading } = useFetchMenuCard(idsMenuCard);

  // console.log(menuRecipes);

  return (
    <>
      <h1>Menu Screen</h1>
      <hr />

      {menuRecipes.length > 0 ? "True" : "false "}

      {menuRecipes.length > 0
        ? menuRecipes?.map((recipe) => (
            <RecipeCard
              removeRecipe={removeRecipe}
              key={recipe.id}
              {...recipe}
            />
          ))
        : "Menu vacio, por favor agregue platos al menu"}

      {/* {menuRecipes?.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))} */}
    </>
  );
};

export default MenuScreen;
