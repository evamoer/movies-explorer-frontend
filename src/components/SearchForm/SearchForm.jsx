import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <form className="search">
      <div className="search__bar">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          name="title"
          required/>
        <button type="submit" className="search__submit"/>
      </div>
      <hr className="row search__row"></hr>
      <FilterCheckbox/>
    </form>
  );
};

export default SearchForm;
