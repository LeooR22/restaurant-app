export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=eb1f38574dd64252b9cf5a37adc66b66";
  const includeNutrition = "includeNutrition=true";
  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
