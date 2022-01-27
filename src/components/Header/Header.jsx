import React from 'react';
import { useLocation } from "react-router-dom";
import Logo from '../Logo/Logo';
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {

  /*
  захардкоженное изменение статуса залогиненного/незалогиненного пользователя
  код будет изменён на этапе 4;
  */

  const location = useLocation();

  const headerClassName = `header ${(location.pathname === '/') ? 'header_type_gray' : 'header_type_white'}`;
  const headerContentClassName = `header__content ${loggedIn ? 'header__content_type_logged-in' : 'header__content_type_logged-out'}`;

  return (
    <header className={headerClassName}>
      <div className={headerContentClassName}>
        <Logo />
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}
export default Header;
