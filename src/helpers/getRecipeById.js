export const getRecipeById = async (id) => {
  const apiKey = "apiKey=eb1f38574dd64252b9cf5a37adc66b66";

  const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
