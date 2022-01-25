import React, { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logopath from '../../images/logo.svg';

const Header = () => {
  /*
  захардкоженное изменение статуса залогиненного/незалогиненного пользователя
  для отображения вёрстки согласно макету необходимо изменить состояние loggedIn с false на true и обратно;
  код будет изменён на этапе 4;
  */

  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const headerClassName = `header ${(location.pathname === '/') ? 'header_type_gray' : 'header_type_white'}`;
  const headerContentClassName = `header__content ${loggedIn? 'header__content_type_logged-in' : 'header__content_type_logged-out'}`;
  const headerMenuButtonClassName = `header__menu-button ${openMenu && 'header__menu-button_type_close'}`;

  const handleMenuNavigationClick = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header className={headerClassName}>
      <div className={headerContentClassName}>
        <Link className="header__logo-link" to="/">
          <img src={logopath} alt="Логотип сайта Movies Explorer" className="header__logo-image"/>
        </Link>
        { loggedIn && <button className={headerMenuButtonClassName} onClick={handleMenuNavigationClick} /> }
        <Navigation loggedIn={loggedIn} openMenu={openMenu} handleMenuNavigationClick={handleMenuNavigationClick}/>
      </div>
    </header>
  )
}
export default Header;
