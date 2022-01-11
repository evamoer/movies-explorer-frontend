import React, {useState} from 'react';
import logopath from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className={`header ${loggedIn? 'header_type_logged-in' : 'header_type_logged-out'}`}>
      <div className="header__container">
        <img src={logopath} alt="Логотип сайта Movies Explorer" className="header__logo"/>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}

export default Header;
