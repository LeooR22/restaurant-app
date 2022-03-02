import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import RecipeSearchCard from "./RecipeSearchCard";
import { useFetchRecipes } from "../../../hooks/useFetchRecipes";
import { useForm } from "../../../hooks/useForm";
import { handleAddToMenu } from "../../../actions/menu";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  console.log(q);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const searchRecipes = useFetchRecipes(q);

  const { data: recipes, loading } = searchRecipes;

  console.log(recipes);
  console.log(loading);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  console.log(searchRecipes);

  return (
    <div>
      <div className="container">
        <form className="input-group mt-4" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            value={searchText}
            onChange={handleInputChange}
          ></input>
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>

        {q !== "" && recipes?.length === 0 && loading === false && (
          <div className="alert alert-danger mt-2">
            There are no plates with the name {q}
          </div>
        )}
        {loading === false && (
          <h3 className="animate__animated animate__fadeIn mt-3">{q}</h3>
        )}
        {loading && (
          <p className="animate__animated animate__flash mt-2">Loading...</p>
        )}
        <div className=" row row-cols-1 row-cols-md-4 g-5 mt-2">
          {recipes?.map((recipe) => (
            <div key={recipe.id}>
              <RecipeSearchCard key={recipe.id} {...recipe} />
              <div className="mt-3">
                <Link
                  className="btn btn-success w-50"
                  to={`recipe/${recipe.id}`}
                >
                  See
                  <br />
                  Steps
                </Link>
                <button
                  onClick={() => handleAddToMenu(recipe.id, recipe)}
                  className="btn btn-primary w-50 h-100 me-"
                >
                  Add to Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
