import React from 'react';
import { useLocation } from "react-router-dom";
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";

/**
 * Header - компонент хэдера.
 *

 */
const Header = ({ isLoggedIn }) => {

  /**
   * Хук для подключения location.
   */
  const location = useLocation();

  /**
   * Переменная класса для header.
   */
  const headerClassName = `header ${(location.pathname === '/') ? 'header_type_gray' : 'header_type_white'}`;

  /**
   * Переменная класса для header__content.
   */
  const headerContentClassName = `header__content ${isLoggedIn ? 'header__content_type_logged-in' : 'header__content_type_logged-out'}`;

  return (
    <header className={headerClassName}>
      <div className={headerContentClassName}>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn}/>
      </div>
    </header>
  )
}
export default Header;
