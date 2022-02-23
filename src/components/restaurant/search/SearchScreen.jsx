import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import queryString from "query-string";

// import { useForm } from "../../../hooks/useForm";
// import RecipeSearchCard from "./RecipeSearchCard";
// import { getRecipeSearch } from "../../../helpers/getGifs";
// import { useFetchGifs } from "../../../hooks/useFetchGifs";
import AddSearch from "./AddSearch";
import RecipeSearch from "./RecipeSearch";

export const SearchScreen = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <div className="container">
        {/* <h2>Search Screen</h2> */}
        <AddSearch setRecipes={setRecipes} />
        <hr />

        <ol>
          {recipes.map((c) => (
            <RecipeSearch recipe={c} key={c} />
          ))}
        </ol>
      </div>
    </>
  );
};

// const SearchScreen = ({ history }) => {
//   const location = useLocation();
//   const { q = "" } = queryString.parse(location.search);

//   //TEST

//   //TEST

//   const [formValues, handleInputChange] = useForm({
//     searchText: q,
//   });

//   //TEST

//   //TEST

//   const { searchText } = formValues;

//   const { data: recipes, loading } = useFetchGifs(searchText);

//   console.log("me estoy disparando");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     history.push(`?q=${searchText}`);
//   };

//   console.log(recipes);
//   console.log(loading);

//   return (
//     <>
//       <div className="container">
//         <form className="input-group mb-3 mt-4">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Recipe"
//             aria-label="Recipe"
//             aria-describedby="button-addon2"
//             name="searchText"
//             value={searchText}
//             onChange={handleInputChange}
//           />
//           <button
//             className="btn btn-warning"
//             type="submit"
//             onClick={handleSearch}
//           >
//             Button
//           </button>
//         </form>
//         <hr />

//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {recipes.map((recipe) => (
//             <RecipeSearchCard key={recipe.id} {...recipe} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
