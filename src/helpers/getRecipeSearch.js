export const getRecipeSearch = async (recipe) => {
  const apiKey = "apiKey=434f0e3b404445f6969b38591cf2e3e5";
  const recipeInfo = "addRecipeInformation=true";

  const url = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&${recipeInfo}&query=${recipe}`;

  const resp = await fetch(url);
  const { results } = await resp.json();

  console.log(results);
  return results;
};
