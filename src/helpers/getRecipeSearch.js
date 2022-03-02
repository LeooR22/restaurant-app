const axios = require("axios");

export const getRecipeSearch = async (recipe) => {
  const apiKey = "apiKey=f2b26eca5f254254a8237e8785fc4bc0";
  const recipeInfo = "addRecipeInformation=true";
  const number = "number=12";

  const url = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}&${recipeInfo}&${number}&query=${recipe}`;

  const resp = await axios.get(url);
  const { data } = await resp;
  const { results } = await data;

  return results;
};
