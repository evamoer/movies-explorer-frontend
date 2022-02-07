import React from 'react';
import Section from '../Section/Section';
import Logo from '../Logo/Logo';
import LoggedOutForm from "../LoggedOutForm/LoggedOutForm";

/**
 * Register - компонент авторизации пользователя по роуту "/signout".
 *
 * @param isError - статус ошибки при отправке формы
 * @param handleRegister - обработчик регистрации пользователя
 * @param isUpdated - статус о попытке отправки формы
 */
const Register = ({ handleRegister, isError, isUpdated }) => {

  /**
   * Обработчик регистрации пользователя.
   *
   * @param name - имя, вводимое пользователем
   * @param email - email, вводимый пользователем
   * @param password - пароль, вводимый пользователем
   */
  const handleRegisterFormSubmit = ({ name, password, email }) => {
    handleRegister(name, password, email);
  }

  return (
    <Section sectionName="register" sectionTitleText={null}>
      <div className="register__logo">
        <Logo />
      </div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <LoggedOutForm type="register" isError={isError} isUpdated={isUpdated} handleFormSubmit={handleRegisterFormSubmit}/>
    </Section>
  );
};

export default Register;

