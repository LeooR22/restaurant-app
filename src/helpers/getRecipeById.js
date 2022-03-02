const axios = require("axios");

export const getRecipeById = async (id) => {
  const apiKey = "apiKey=f2b26eca5f254254a8237e8785fc4bc0";

  const url = `https://api.spoonacular.com/recipes/${id}/card?${apiKey}`;

  const resp = await axios.get(url);
  const { data } = await resp;

  return data;
};
