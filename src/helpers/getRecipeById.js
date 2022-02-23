export const getRecipeById = async (id) => {
  const apiKey = "apiKey=00fa162232574d8eb9241b99eeef3b67";

  const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
