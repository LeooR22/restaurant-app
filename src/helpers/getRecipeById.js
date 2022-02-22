export const getRecipeById = async (id) => {
  const apiKey = "apiKey=b916e77f72b747e9b760f3f1f8d5b78a";

  const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
