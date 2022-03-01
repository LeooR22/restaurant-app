export const getRecipeSearch = async (recipe) => {
  const apiKey = "apiKey=eb1f38574dd64252b9cf5a37adc66b66";
  const recipeInfo = "addRecipeInformation=true";

  const url = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&${recipeInfo}&query=${recipe}`;

  const resp = await fetch(url);
  const { results } = await resp.json();

  console.log(results);
  return results;
};
