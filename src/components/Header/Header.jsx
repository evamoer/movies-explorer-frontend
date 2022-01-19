import React, {useState, useEffect} from 'react';
import logopath from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import {useLocation} from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  useEffect(() => {
    (location.pathname === '/') ? setLoggedIn(false) : setLoggedIn(true)
  }, []);

  return (
    <header className={`header ${loggedIn? 'header_type_logged-in' : 'header_type_logged-out'}`}>
      <div className={`header__content ${loggedIn? 'header__content_type_logged-in' : 'header__content_type_logged-out'}`}>
        <img src={logopath} alt="Логотип сайта Movies Explorer" className="header__logo"/>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}
export default Header;
