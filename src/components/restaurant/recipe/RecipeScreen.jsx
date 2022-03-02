import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchRecipeById } from "../../../hooks/useFetchRecipeById";
import Loading from "../../ui/loading/Loading";

export const RecipeScreen = () => {
  const { recipeId } = useParams();
  let history = useHistory();

  console.log(recipeId);

  const { data, loading } = useFetchRecipeById(recipeId);
  console.log(data);
  console.log(loading);
  const { url } = data;
  console.log(url);

  const handleBackPage = () => {
    history.goBack();
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="container d-flex justify-content-center">
            <img src={url} alt={recipeId} className="img-fluid w-75" />
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={handleBackPage}
              className="btn btn-info mt-3 mb-4 w-25 "
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
