import React from 'react';
import {NavLink} from "react-router-dom";

const LoggedInNavigation = ({ openMenu, handleMenuNavigationClick }) => {

  return (
    <nav className={`navigation navigation_type_logged-in ${openMenu && 'navigation_type_opened'}`}>
      <ul className={`navigation__menu_type_closed ${openMenu && 'navigation__menu_type_opened'}`}>
        <li className="navigation__item_type_opened">
          <NavLink to="/" className="navigation__link_type_opened" onClick={handleMenuNavigationClick}>Главная</NavLink>
        </li>
        <li className="navigation__item_type_opened">
          <NavLink to="/movies" className="navigation__link_type_opened" onClick={handleMenuNavigationClick}>Фильмы</NavLink>
        </li>
        <li className="navigation__item_type_opened">
          <NavLink to="/savedmovies" className="navigation__link_type_opened" onClick={handleMenuNavigationClick}>Сохранённые фильмы</NavLink>
        </li>
        <li className="navigation__item_type_profile">
          <NavLink to="/profile" className="navigation__link_type_profile" onClick={handleMenuNavigationClick}/>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedInNavigation;
