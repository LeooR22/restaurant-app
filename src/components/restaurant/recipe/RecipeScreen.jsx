import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
// import getHeroById from "../../helpers/getHeroById";

export const RecipeScreen = () => {
  const { recipeId } = useParams();
  let history = useHistory();

  console.log(recipeId);

  const menuRecipes = [
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      weightWatcherSmartPoints: 17,
      gaps: "no",
      lowFodmap: false,
      aggregateLikes: 209,
      spoonacularScore: 83.0,
      healthScore: 19.0,
      creditsText: "Full Belly Sisters",
      license: "CC BY-SA 3.0",
      sourceName: "Full Belly Sisters",
      pricePerServing: 163.15,
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      readyInMinutes: 45,
      servings: 2,
      sourceUrl:
        "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
      image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
      imageType: "jpg",
      summary:
        'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for. This recipe makes 2 servings with <b>636 calories</b>, <b>21g of protein</b>, and <b>20g of fat</b> each. For <b>$1.83 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes about <b>45 minutes</b>. This recipe is liked by 209 foodies and cooks. If you have pasta, salt and pepper, cheese, and a few other ingredients on hand, you can make it. To use up the extra virgin olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/peach-crisp-healthy-crisp-for-breakfast-487698">Peach Crisp: Healthy Crisp for Breakfast</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is tremendous. Try <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, <a href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a> for similar recipes.',
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: [],
      occasions: [],
      winePairing: {
        pairedWines: [],
        pairingText:
          "No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.",
        productMatches: [],
      },
      instructions: "",
      analyzedInstructions: [],
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    },
  ];

  const {
    image,
    title,
    healthScore,
    servings,
    vegan,
    readyInMinutes,
    pricePerServing,
  } = menuRecipes[0];

  const handleBackPage = () => {
    history.goBack();
  };

  return (
    <div className="container">
      <div className="container row mt-5">
        <div className="col-4">
          <img
            src={image}
            alt={title}
            className="img-thumbnail animate__animated animate__bounceInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{title}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Is vegan ?</b>
              {vegan ? "Yes" : "No"}
            </li>
            <li className="list-group-item">
              <b>healthScore: </b>
              {healthScore}
            </li>
            <li className="list-group-item ">
              <b>servings: </b>
              {servings}
            </li>
            <li className="list-group-item ">
              <b>readyInMinutes: </b>
              {readyInMinutes}
            </li>
            <li className="list-group-item ">
              <b>pricePerServing: </b>
              {pricePerServing}
            </li>
          </ul>

          <button onClick={handleBackPage} className="btn btn-info ms-3 mt-3">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
