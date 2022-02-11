import React from "react";
import { RecipeCard } from "./RecipeCard";

const MenuScreen = () => {
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
    {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: true,
      cheap: false,
      veryPopular: true,
      sustainable: false,
      weightWatcherSmartPoints: 4,
      gaps: "no",
      lowFodmap: false,
      aggregateLikes: 3689,
      spoonacularScore: 100.0,
      healthScore: 76.0,
      creditsText: "Full Belly Sisters",
      license: "CC BY-SA 3.0",
      sourceName: "Full Belly Sisters",
      pricePerServing: 112.39,
      id: 716426,
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      readyInMinutes: 30,
      servings: 8,
      sourceUrl:
        "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
      image: "https://spoonacular.com/recipeImages/716426-556x370.jpg",
      imageType: "jpg",
      summary:
        'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
      cuisines: ["Chinese", "Asian"],
      dishTypes: ["side dish"],
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      occasions: [],
      winePairing: {
        pairedWines: ["chenin blanc", "gewurztraminer", "riesling"],
        pairingText:
          "Chenin Blanc, Gewurztraminer, and Riesling are great choices for Asian. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. You could try Leo Steen Saini Vineyard Chenin Blanc. Reviewers quite like it with a 4.4 out of 5 star rating and a price of about 24 dollars per bottle.",
        productMatches: [
          {
            id: 464148,
            title: "Leo Steen Saini Vineyard Chenin Blanc",
            description:
              "Like being transported to a spring meadow, this lovely wine displays enticing aromas of chamomile, lemon verbena, thyme and zesty citrus. On the long, refreshing palate, excellent natural acidity and wet gravel minerality bring beautiful energy to the wine, carrying flavors of green apple and Anjou pear to a bright, focused finish.",
            price: "$23.99",
            imageUrl:
              "https://spoonacular.com/productImages/464148-312x231.jpg",
            averageRating: 0.8800000000000001,
            ratingCount: 5.0,
            score: 0.8175000000000001,
            link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fleo-steen-saini-vineyard-chenin-blanc-2014%2F162565",
          },
        ],
      },
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426",
    },
  ];

  return (
    <>
      <h1>Menu Screen</h1>
      <hr />

      {menuRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </>
  );
};

export default MenuScreen;
