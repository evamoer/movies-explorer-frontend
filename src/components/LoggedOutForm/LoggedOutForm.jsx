import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import useFormAndValidation from "../../hooks/validationHook";
import { LOGGED_OUT_FORM_SETTINGS } from "../../utils/constants";

/**
 * LoggedOutForm - компонент формы на неавторизованных роутах.
 *
 * @param type - тип формы (из какого компонента)
 * @param isError - статус ошибки при отправке формы
 * @param handleFormSubmit - обработчик нажатия на сабмит формы
 */
const LoggedOutForm = ({ type, isError, handleFormSubmit }) => {

  /**
   * Переменные для обработки взаимодействия с формой и её валидации.
   */
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormAndValidation();

  /**
   * Хук для установления начальных значений формы.
   */
  useEffect(() => {
    resetForm();
    setValues({
      name: '',
      email: '',
      password: '',
    });
  }, [resetForm, setValues]);

  /**
   * Обработчик сабмита формы.
   */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormSubmit(values);
  }

  return (
    <form
      className="form"
      name={`${type}-form`}
      onSubmit={handleSubmit}
    >
      {LOGGED_OUT_FORM_SETTINGS[`${type}`].INPUTS.name.isLocated && (
        <div className="form__element">
          <label htmlFor="name" className="form__label">Имя</label>
          <input
            className={`form__input ${errors?.name && 'form__input_type_error'}`}
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя"
            value={values?.name || ''}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            required
          />
          {errors?.name && <span className="form__error">{errors?.name}</span>}
        </div>
      )}
      {LOGGED_OUT_FORM_SETTINGS[`${type}`].INPUTS.email.isLocated && (
        <div className="form__element">
          <label htmlFor="email" className="form__label">E-mail</label>
          <input
            className={`form__input ${errors?.email && 'form__input_type_error'}`}
            type="email"
            name="email"
            id="email"
            placeholder="Введите email"
            value={values?.email || ''}
            onChange={handleChange}
            required
          />
          {errors?.email && <span className="form__error">{errors?.email}</span>}
        </div>
      )}
      {LOGGED_OUT_FORM_SETTINGS[`${type}`].INPUTS.password.isLocated && (
        <div className="form__element">
          <label htmlFor="password" className="form__label">Пароль</label>
          <input
            className={`form__input ${(errors?.password || isError) && 'form__input_type_error'}`}
            type="password"
            name="password"
            id="password"
            placeholder="Введите пароль"
            value={values?.password || ''}
            onChange={handleChange}
            required
          />
          {(errors?.password || isError) && <span className="form__error">{errors?.password || "Что-то пошло не так..."}</span>}
        </div>
      )}
      <button
        className={`form__submit form__element ${!isValid && 'form__submit_type_disabled'}`}
        type="submit"
      >
        {LOGGED_OUT_FORM_SETTINGS[`${type}`].SUBMIT_TEXT}
      </button>
      <div className="form__prompt">
        <p className="form__question">
          {LOGGED_OUT_FORM_SETTINGS[`${type}`].QUESTION_TEXT}
        </p>
        <Link
          className="form__link"
          to={LOGGED_OUT_FORM_SETTINGS[`${type}`].LINK_PATH}
        >
          {LOGGED_OUT_FORM_SETTINGS[`${type}`].LINK_TEXT}
        </Link>
      </div>
    </form>
  );
};

export default LoggedOutForm;
