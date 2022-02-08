import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

/**
 * FilterCheckbox - компонент чекбокс в форме поиска.
 * Определяет длительность искомых фильмов.
 */
const FilterCheckbox = ({ handleCheckboxChange }) => {

  /**
   * Хук для подключения location.
   */
  const location = useLocation();

  /**
   * Переменная для определения состояния чекбокса: включен/выключен.
   */
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Хук для подгрузки состояния чекбокса из localStorage,
   * если состояние отсутствует, автоматически устанавливается в false.
   */
  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('movies-checkbox')) {
      (localStorage.getItem('movies-checkbox') === "false") ? setIsChecked(false) : setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  /**
   * Обработчик изменения состояния чекбокса.
   * При нахождении на странице /movies состояние сохраняется в localStorage.
   */
  const handleChange = (evt) => {
    let checkboxStatus = evt.target.checked;
    setIsChecked(checkboxStatus);
    if (location.pathname === '/movies') {
      localStorage.setItem('movies-checkbox', checkboxStatus);
    }
    handleCheckboxChange(checkboxStatus);
  }

  return (
    <div className="filter search__filter">
      <label className="filter__label">
        <input
          className="filter__checkbox filter__checkbox_type_input"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="filter__checkbox filter__checkbox_type_span"></span>
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
