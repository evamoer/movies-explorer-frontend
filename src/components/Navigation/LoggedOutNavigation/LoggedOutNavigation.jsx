import React from 'react';

const LoggedOutNavigation = () => {
  return (
    <nav className="navigation navigation_type_logged-out">
      <ul className="navigation__menu_type_logged-out">
        <li className="navigation__item navigation__item_type_logged-out">
          <a href="/signup" className="navigation__link navigation__link_type_logged-out navigation__link_type_signup">Регистрация</a>
        </li>
        <li className="navigation__item navigation__item_type_logged-out">
          <a href="/signin" className="navigation__link navigation__link_type_logged-out navigation__link_type_signin">Войти</a>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedOutNavigation;
