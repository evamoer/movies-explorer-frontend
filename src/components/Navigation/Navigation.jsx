import React from 'react';
import LoggedOutNavigation from './LoggedOutNavigation/LoggedOutNavigation';
import LoggedInNavigation from "./LoggedInNavigation/LoggedInNavigation";

const Navigation = ({ loggedIn, openMenu, handleMenuNavigationClick }) => {

  return (
    <>
      { loggedIn
        ? <LoggedInNavigation openMenu={openMenu} handleMenuNavigationClick={handleMenuNavigationClick}/>
        : <LoggedOutNavigation /> }
    </>
  )
}

export default Navigation;
