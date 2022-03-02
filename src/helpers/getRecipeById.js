export const getRecipeById = async (id) => {
  const apiKey = "apiKey=626e07a05b334be797accd054483181a";

  const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
