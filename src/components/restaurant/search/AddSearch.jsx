import React, { useState } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

const AddSearch = ({ setRecipes, history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  console.log(q);

  const [inputValue, setInputValue] = useState([""]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setRecipes(() => [inputValue]);
    }
    console.log(inputValue);
    // history.push(`?q=${inputValue}`);
  };

  // const location = useLocation();
  // const { q = "" } = queryString.parse(location.search);

  // const [formValues, handleInputChange] = useForm({
  //   searchText: q,
  // });
  // const { searchText } = formValues;

  // // const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // history.push(`?q=${searchText}`);
  //   console.log(q);
  // };
  // console.log(q);

  return (
    <form className="input-group mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        name="searchText"
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
