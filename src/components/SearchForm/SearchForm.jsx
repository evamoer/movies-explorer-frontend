import React, {useEffect, useState} from 'react';
import useFormAndValidation from "../../hooks/validationHook";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Row from "../Row/Row";
import {BASE_URL, getAllMovies} from "../../utils/MoviesApi";

const SearchForm = ({ handleSearchSubmit }) => {
  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({title: ''});
  }, [resetForm, setValues]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchSubmit();
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__bar">
        <label className="search__label" htmlFor="search__input"/>
        <input
          type="text"
          className={`search__input ${errors.title && "search__input_type_error"}`}
          placeholder="Фильм"
          name="title"
          id="search__input"
          value={values.title || ''}
          onChange={handleChange}
          required/>
        {errors.title && <span className="search__error">Нужно ввести ключевое слово.</span>}
        <button type="submit" className="search__submit"/>
      </div>
      <Row rowClassName="search__row"/>
      <FilterCheckbox/>
    </form>
  );
};

export default SearchForm;
