export const getRecipeById = async (id) => {
  const apiKey = "apiKey=00fa162232574d8eb9241b99eeef3b67";

  const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  //   const recipeById = results.map((recipe) => {
  //     return {
  //       id: recipe.id,
  //       title: recipe.title,
  //       image: recipe.image,
  //       vegan: recipe.vegan,
  //       healthScore: recipe.healthScore,

  //       servings: recipe.servings,
  //       pricePerServing: recipe.pricePerServing,
  //       readyInMinutes: recipe.readyInMinutes,
  //       diets: recipe.diets,
  //       ///////////////////////////////////////////
  //       spoonacularScore: recipe.spoonacularScore,
  //       glutenFree: recipe.glutenFree,
  //       dishTypes: recipe.dishTypes,
  //       analyzedInstructions: recipe.analyzedInstructions,
  //       vegetarian: recipe.vegetarian,
  //       veryHealthy: recipe.veryHealthy,
  //       veryPopular: recipe.veryPopular,
  //     };
  //   });
  //   console.log(recipeById);

  return data;
};
