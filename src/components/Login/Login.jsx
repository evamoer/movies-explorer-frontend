import React from 'react';
import Section from '../Section/Section';
import Logo from '../Logo/Logo';
import LoggedOutForm from "../LoggedOutForm/LoggedOutForm";

/**
 * Login - компонент авторизации пользователя по роуту "/signin".
 *
 * @param isError - статус ошибки при отправке формы
 * @param handleLogin - обработчик авторизации пользователя
 */
const Login = ({  isError, handleLogin }) => {

  /**
   * Обработчик сабмита формы авторизации пользователя.
   *
   * @param email - email, вводимый пользователем
   * @param password - пароль, вводимый пользователем
   */
  const handleLoginFormSubmit = ({ email, password }) => {
    handleLogin(email, password);
  }

  return (
    <Section sectionName="login" sectionTitleText={null}>
      <div className="login__logo">
        <Logo />
      </div>
      <h2 className="login__title">Рады видеть!</h2>
      <LoggedOutForm type="login" isError={isError} handleFormSubmit={handleLoginFormSubmit}/>
    </Section>
  );
};

export default Login;
