const axios = require("axios");

export const getRecipeSearch = async (recipe) => {
  const apiKey = "apiKey=582558b5c3e94aaeb50d10835f34f4b3";
  const recipeInfo = "addRecipeInformation=true";
  const number = "number=12";

  const url = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&${recipeInfo}&${number}&query=${recipe}`;

  const resp = await axios.get(url);
  const { data } = await resp;
  const { results } = await data;

  return results;
};
