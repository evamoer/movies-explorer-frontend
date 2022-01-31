import React, {useEffect} from 'react';
import useFormAndValidation from "../../hooks/validationHook";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Row from "../Row/Row";

const SearchForm = ({ handleSearchSubmit }) => {
  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({search: ''});
  }, [resetForm, setValues]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchSubmit(values.search.toLowerCase());

  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__bar">
        <label className="search__label" htmlFor="search__input"/>
        <input
          type="text"
          className={`search__input ${errors.search && "search__input_type_error"}`}
          placeholder="Фильм"
          name="search"
          id="search__input"
          value={values.search || ''}
          onChange={handleChange}
          required/>
        {errors.search && <span className="search__error">Нужно ввести ключевое слово.</span>}
        <button type="submit" className="search__submit"/>
      </div>
      <Row rowClassName="search__row"/>
      <FilterCheckbox/>
    </form>
  );
};

export default SearchForm;
