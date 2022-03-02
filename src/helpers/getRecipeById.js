const axios = require("axios");

export const getRecipeById = async (id) => {
  const apiKey = "apiKey=582558b5c3e94aaeb50d10835f34f4b3";

  const url = `https://api.spoonacular.com/recipes/${id}/card?${apiKey}`;

  const resp = await axios.get(url);
  const { data } = await resp;

  return data;
};
