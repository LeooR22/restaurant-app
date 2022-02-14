import React from "react";
import RecipeSearchCard from "./RecipeSearchCard";

const SearchScreen = () => {
  const recipesSearch = [
    {
      id: 716426,
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715594,
      title: "Homemade Garlic and Basil French Fries",
      image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715497,
      title: "Berry Banana Breakfast Smoothie",
      image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 644387,
      title: "Garlicky Kale",
      image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716268,
      title: "African Chicken Peanut Stew",
      image: "https://spoonacular.com/recipeImages/716268-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716381,
      title: "Nigerian Snail Stew",
      image: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 782601,
      title: "Red Kidney Bean Jambalaya",
      image: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 794349,
      title: "Broccoli and Chickpea Rice Salad",
      image: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715446,
      title: "Slow Cooker Beef Stew",
      image: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715415,
      title: "Red Lentil Soup with Chicken and Turnips",
      image: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
      imageType: "jpg",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Recipe"
            aria-label="Recipe"
            aria-describedby="button-addon2"
            name="recipe"
          />
          <button className="btn btn-warning" type="button" id="button-addon2">
            Button
          </button>
        </div>
        <hr />

        <div className="row row-cols-1 row-cols-md-5 g-4">
          {recipesSearch.map((recipe) => (
            <RecipeSearchCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
