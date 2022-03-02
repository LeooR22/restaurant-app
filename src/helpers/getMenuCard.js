export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=626e07a05b334be797accd054483181a";
  const includeNutrition = "includeNutrition=true";
  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
