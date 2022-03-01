import React, { useEffect, useState } from "react";
import { useFetchMenuCard } from "../../../hooks/useFetchMenuCard";
import { RecipeCard } from "./RecipeCard";
import Swal from "sweetalert2";
import { Averages } from "./Averages";

const MenuScreen = () => {
  const [menuCard, setMenuCard] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("menuCard")) {
      setMenuCard(JSON.parse(localStorage.getItem("menuCard")));
    }
  }, [setMenuCard]);

  useEffect(() => {
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

  let arrayIdMenuCard = menuCard?.map((obj) => obj.id);
  const idsMenuCard = arrayIdMenuCard?.join(",");
  const { data: menuRecipes, loading } = useFetchMenuCard(idsMenuCard);
  const { code, message } = menuRecipes;

  return (
    <>
      <h1>Menu</h1>
      <hr />
      <div className="d-flex justify-content-evenly">
        <div className="card">
          <h1></h1>
          <Averages menuRecipes={menuRecipes} />
        </div>
        <div className="card">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {menuRecipes.length > 0 ? (
                <div className="">
                  {menuRecipes?.map((recipe) => (
                    <RecipeCard
                      removeRecipe={removeRecipe}
                      key={recipe.id}
                      {...recipe}
                    />
                  ))}
                </div>
              ) : (
                "Menu vacio, por favor agregue platos al menu"
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuScreen;
