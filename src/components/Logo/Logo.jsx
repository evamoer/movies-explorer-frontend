import React from 'react';
import { Link } from "react-router-dom";
import logopath from '../../images/logo.svg';

const Logo = () => {

  return (
    <Link className="logo" to="/">
      <img className="logo__image" src={logopath} alt="Логотип сайта Movies Explorer" />
    </Link>
  )
}

export default Logo;
