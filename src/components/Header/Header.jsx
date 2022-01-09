import React, {useState} from 'react';
import logopath from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header className="header">
      <div className="header__container">
        <img src={logopath} alt="Логотип сайта Movies Explorer" className="header__logo"/>
        <Navigation loggedIn={loggedIn}/>
      </div>
    </header>
  )
}

export default Header;
