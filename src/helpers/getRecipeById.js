export const getRecipeById = async (id) => {
  const apiKey = "apiKey=f2b26eca5f254254a8237e8785fc4bc0";

  const url = `https://api.spoonacular.com/recipes/${id}/card?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
