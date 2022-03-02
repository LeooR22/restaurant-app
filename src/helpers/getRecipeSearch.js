export const getRecipeSearch = async (recipe) => {
  const apiKey = "apiKey=626e07a05b334be797accd054483181a";
  const recipeInfo = "addRecipeInformation=true";
  const number = "number=12";

  const url = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&${recipeInfo}&${number}&query=${recipe}`;

  const resp = await fetch(url);
  const { results } = await resp.json();

  console.log(results);
  return results;
};
