import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const AddSearch = ({ setRecipes }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const [inputValue, setInputValue] = useState([""]);
  const test = searchParams.get(inputValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setRecipes(() => [inputValue]);
      //   setInputValue("");
    }
    // history.push(`?q=${inputValue}`);
    // console.log("submit hecho !!!");
  };

  return (
    <form className="input-group mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        name="inputValue"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button className="btn btn-warning" type="submit">
        Search
      </button>
    </form>
  );
};

AddSearch.propTypes = {
  setRecipes: PropTypes.func.isRequired,
};

export default AddSearch;
