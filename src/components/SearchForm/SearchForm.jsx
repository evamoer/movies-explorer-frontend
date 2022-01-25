import React from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Row from "../Row/Row";
const searchRowClassName = 'search__row';

const SearchForm = () => {
  return (
    <form className="search">
      <div className="search__bar">
        <label className="search__label" htmlFor="search__input"/>
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          name="title"
          id="search__input"
          required/>
        <button type="submit" className="search__submit"/>
      </div>
      <Row rowClassName={searchRowClassName}/>
      <FilterCheckbox/>
    </form>
  );
};

export default SearchForm;
