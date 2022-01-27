import React from 'react';
import { NavLink } from "react-router-dom";

const UpperMenu = () => {

  return (
    <nav className="navigation navigation_type_upper-menu">
      <ul className="navigation__upper-menu">
        <li className="navigation__upper-item">
          <NavLink to="/movies" activeClassName="navigation__upper-link_type_active" className="navigation__upper-link">
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__upper-item">
          <NavLink to="/savedmovies" activeClassName="navigation__upper-link_type_active" className="navigation__upper-link">
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__upper-item_type_profile">
          <NavLink to="/profile" className="navigation__upper-link_type_profile"/>
        </li>
      </ul>
    </nav>
  )
}

export default UpperMenu;
