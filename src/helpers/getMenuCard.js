const axios = require("axios");

export const getMenuCard = async (ids) => {
  const apiKey = "apiKey=582558b5c3e94aaeb50d10835f34f4b3";
  const includeNutrition = "includeNutrition=true";

  const url = `https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&${includeNutrition}&${apiKey}`;

  try {
    const resp = await axios.get(url);
    const { data } = await resp;

    return data;
  } catch (error) {
    console.log(error);
  }
  // const resp = await axios.get(url).then((data) => console.log(data)).catch(err) {
};
// const { data } = await resp;

// return data;
// };
