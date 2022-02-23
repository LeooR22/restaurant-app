export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=00fa162232574d8eb9241b99eeef3b67";
  const includeNutrition = "includeNutrition=true";

  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
