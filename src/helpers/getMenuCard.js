export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=f2b26eca5f254254a8237e8785fc4bc0";
  const includeNutrition = "includeNutrition=true";
  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
