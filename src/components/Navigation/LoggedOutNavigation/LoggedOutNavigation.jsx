import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * LoggedOutNavigation - компонент навигации при неавторизованном пользователе.
 */
const LoggedOutNavigation = () => {

  return (
    <nav className="navigation navigation_type_logged-out">
      <ul className="navigation__menu navigation__menu_type_logged-out">
        <li className="navigation__item navigation__item_type_logged-out">
          <NavLink to="/signup" className="navigation__link navigation__link_type_logged-out navigation__link_type_signup">
            Регистрация
          </NavLink>
        </li>
        <li className="navigation__item navigation__item_type_logged-out">
          <NavLink to="/signin" className="navigation__link navigation__link_type_logged-out navigation__link_type_signin">
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedOutNavigation;
