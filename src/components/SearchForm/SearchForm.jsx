import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Row from "../Row/Row";
import useFormAndValidation from "../../hooks/validationHook";

/**
 * SearchForm - компонент формы поиска фильмов.
 *
 * @param handleSearchSubmit - обработчик поиска по всем фильмам
 */
const SearchForm = ({ handleSearchSubmit }) => {

  /**
   * Хук для подключения location.
   */
  const location = useLocation();

  /**
   * Переменные для обработки взаимодействия с формой и её валидации.
   */
  const {values, handleChange, errors, setValues, resetForm} = useFormAndValidation();

  /**
   * Хук для отображения формы:
   * на роуте "/movies" при наличии данных в localStorage: устанавливаем их,
   * во всех остальных случаях ничего не устанавливаем.
   */
  useEffect(() => {
    resetForm();
    if (location.pathname === '/movies' && localStorage.getItem('movies-search')) {
      setValues({
        search: localStorage.getItem('movies-search'),
      });
    } else {
      setValues({ search: "" });
    }
  }, []);

  /**
   * Обработчик сабмита формы.
   */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let searchValue = values.search.toLowerCase();
    let checkboxValue = evt.target.checkbox.checked;
    if (location.pathname === '/movies') {
      localStorage.setItem('movies-search', searchValue);
    }
    handleSearchSubmit(searchValue, checkboxValue);
  }

  return (
    <form className="search" id="search" name="search" onSubmit={handleSubmit}>
      <div className="search__bar">
        <label className="search__label" htmlFor="search__input"/>
        <input
          type="text"
          className={`search__input ${errors.search && "search__input_type_error"}`}
          placeholder="Фильм"
          name="search"
          id="search__input"
          value={values.search || ""}
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
