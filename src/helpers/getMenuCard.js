export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=b916e77f72b747e9b760f3f1f8d5b78a";
  const includeNutrition = "includeNutrition=true";

  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
