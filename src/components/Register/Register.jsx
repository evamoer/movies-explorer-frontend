import React from 'react';
import logopath from "../../images/logo.svg";

const Register = () => {
  return (
    <section className="register section">
      <img className="register__logo" src={logopath} alt="Логотип сайта Movies Explorer"/>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <div className="register__row">
          <label className="register__label" htmlFor="register__input-name">Имя</label>
          <input className="register__input" type="text" id="register__input-name" value="Виталий" required/>
        </div>
        <div className="register__row">
          <label className="register__label" htmlFor="register__input-email">E-mail</label>
          <input className="register__input" type="text" id="register__input-email" value="pochta@yandex.ru" required/>
        </div>
        <div className="register__row">
          <label className="register__label" htmlFor="register__input-password">Пароль</label>
          <input className="register__input register__input_type_error" type="password" id="register__input-password" value="passwordpasswo" required/>
          <span className="register__error">что-то пошло не так...</span>
        </div>
        <button className="register__submit" type="submit">Войти</button>
      </form>
      <div className="register__prompt">
        <p className="register__question">Ещё не зарегистрированы?</p>
        <a className="register__link" href="#">Регистрация</a>
      </div>
    </section>
  );
};

export default Register;

