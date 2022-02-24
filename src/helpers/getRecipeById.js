export const getRecipeById = async (id) => {
  const apiKey = "apiKey=434f0e3b404445f6969b38591cf2e3e5";

  const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
