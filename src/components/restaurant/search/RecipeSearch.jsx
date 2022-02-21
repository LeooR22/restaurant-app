import React from "react";
import { useFetchRecipes } from "../../../hooks/useFetchRecipes";
// import GifGridItem from "./GifGridItem";
import RecipeSearchCard from "./RecipeSearchCard";

const RecipeSearch = ({ recipe }) => {
  const { data: recipes, loading } = useFetchRecipes(recipe);

  // useEffect(() => {
  //   getGifs(recipe).then(setImages);
  // }, [recipe]);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{recipe}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <div className=" row row-cols-1 row-cols-md-5 g-4">
        {recipes.map((recipe) => (
          <RecipeSearchCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeSearch;
