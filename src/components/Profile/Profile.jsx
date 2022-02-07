import React, {useContext, useEffect, useRef, useState} from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Section from '../Section/Section';
import useFormAndValidation from "../../hooks/validationHook";
import Row from "../Row/Row";

/**
 * Profile - компонент профиля пользователя по роуту "/profile".
 *
 * @param isError - статус ошибки при отправке формы
 * @param handleUpdateProfile - обработчик обновления данных пользователя
 * @param handleLogout - обработчик выхода пользователя из аккаунта.
 */
const Profile = ({ isUpdated, isError, handleUpdateProfile, handleLogout }) => {

  /**
   * Переменная с контекстом текущего пользователя.
   */
  const currentUser = useContext(CurrentUserContext);

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
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [resetForm, setValues]);


  /**
   * Обработчик сабмита формы.
   */
  const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    const { name, email } = values;
    handleUpdateProfile(name, email);
  }

  return (
    <Section sectionName="profile" sectionTitleText={null}>
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form
        className="profile__form"
        name="profile-form"
        onSubmit={handleProfileFormSubmit}
      >
        <div className="profile__element">
          <label htmlFor="name" className="profile__label">Имя</label>
          <input
            className={`profile__input ${errors?.name && 'profile__input_type_error'}`}
            type="text"
            name="name"
            id="name"
            placeholder="Введите имя"
            value={values?.name || ""}
            onChange={handleChange}
            minLength={2}
            maxLength={30}
            required
          />
          {errors?.name && <span className="profile__error">{errors?.name}</span>}
        </div>
        <Row rowClassName="profile__row" />
        <div className="profile__element">
          <label htmlFor="email" className="profile__label">E-mail</label>
          <input
            className={`profile__input ${errors?.email && 'profile__input_type_error'}`}
            type="email"
            name="email"
            id="email"
            placeholder="Введите email"
            value={values?.email || ""}
            onChange={handleChange}
            required
          />
          {errors?.email && <span className="profile__error">{errors?.email}</span>}
        </div>
        {isUpdated && <span className="profile__message">{isError ? "Что-то пошло не так..." : "Данные были изменены"}</span>}
        <button
          className={`profile__submit ${!isValid && 'profile__submit_type_disabled'}`}
          type="submit"
        >
          Редактировать
        </button>
        <button type="button" className="profile__logout-button" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </form>
    </Section>
  );
};

export default Profile;
