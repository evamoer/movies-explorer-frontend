import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const SideBarMenu = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigationButtonClassName = `navigation__button ${isMenuOpened ? 'navigation__button_type_close' : 'navigation__button_type_open'}`;
  const navigationSidebarMenuClassName = `navigation__sidebar-menu ${isMenuOpened ? 'navigation__sidebar-menu_type_opened' : 'navigation__sidebar-menu_type_closed'}`;

  function handleNavigationClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <nav className='navigation navigation_type_sidebar'>
      <button className={navigationButtonClassName} onClick={handleNavigationClick} />
      <ul className={navigationSidebarMenuClassName}>
        <li className="navigation__sidebar-item">
          <NavLink to="/" className="navigation__sidebar-link" onClick={handleNavigationClick}>
            Главная
          </NavLink>
        </li>
        <li className="navigation__sidebar-item">
          <NavLink to="/movies" className="navigation__sidebar-link" onClick={handleNavigationClick}>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__sidebar-item">
          <NavLink to="/savedmovies" className="navigation__sidebar-link" onClick={handleNavigationClick}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__sidebar-item_type_profile">
          <NavLink to="/profile" className="navigation__sidebar-link_type_profile" onClick={handleNavigationClick}/>
        </li>
      </ul>
    </nav>
  )
}

export default SideBarMenu;
