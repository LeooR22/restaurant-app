export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=434f0e3b404445f6969b38591cf2e3e5";
  const includeNutrition = "includeNutrition=true";

  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
