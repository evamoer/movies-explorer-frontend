import React from 'react';
import logopath from '../../images/logo.svg';

const Login = () => {
  return (
    <section className="login section">
      <img className="login__logo" src={logopath} alt="Логотип сайта Movies Explorer"/>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <div className="login__row">
          <label className="login__label" htmlFor="login__input-email">E-mail</label>
          <input className="login__input" type="text" id="login__input-email" value="pochta@yandex.ru" required/>
        </div>
        <div className="login__row">
          <label className="login__label" for="login__input-password">Пароль</label>
          <input className="login__input" type="password" id="login__input-password" value="password" required/>
        </div>
        <button className="login__submit" type="submit">Войти</button>
      </form>
      <div className="login__prompt">
        <p className="login__question">Ещё не зарегистрированы?</p>
        <a className="login__link" href="#">Регистрация</a>
      </div>

    </section>
  );
};

export default Login;
