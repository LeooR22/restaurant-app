import React, { useEffect, useState } from "react";
import { useFetchMenuCard } from "../../../hooks/useFetchMenuCard";
import { Averages } from "./Averages";
import RecipeSearchCard from "../search/RecipeSearchCard";
import { Link } from "react-router-dom";
import { handleDeleteToMenu } from "../../../actions/menu";

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

  let arrayIdMenuCard = menuCard?.map((obj) => obj.id);
  const idsMenuCard = arrayIdMenuCard?.join(",");
  const { data: menuRecipes, loading } = useFetchMenuCard(idsMenuCard);
  // const { code, message } = menuRecipes;

  return (
    <>
      <div className="mt-5 d-flex justify-content-evenly">
        <div className="card w-25">
          <div className="">
            <Averages menuRecipes={menuRecipes} />
          </div>
        </div>
        <div className="card w-50">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {menuRecipes.length > 0 ? (
                <div className="row row-cols-2 row-cols-md-2 g-5">
                  {menuRecipes?.map((recipe) => (
                    <div key={recipe.id}>
                      <RecipeSearchCard key={recipe.id} {...recipe} />
                      <div className="mt-3">
                        <Link
                          className="btn btn-success w-50 h-100"
                          to={`recipe/${recipe.id}`}
                        >
                          See
                          <br />
                          Steps
                        </Link>
                        <button
                          onClick={() =>
                            handleDeleteToMenu(recipe.id, menuCard, setMenuCard)
                          }
                          className="btn btn-danger w-50 h-100 me-"
                        >
                          Delete to
                          <br />
                          Menu
                        </button>
                      </div>
                    </div>
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
