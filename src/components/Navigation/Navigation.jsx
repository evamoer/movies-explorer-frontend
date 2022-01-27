import React from 'react';
import LoggedOutNavigation from './LoggedOutNavigation/LoggedOutNavigation';
import LoggedInNavigation from "./LoggedInNavigation/LoggedInNavigation";

const Navigation = ({ loggedIn }) => {

  return (
    <>
      { loggedIn ? <LoggedInNavigation /> : <LoggedOutNavigation /> }
    </>
  )
}

export default Navigation;
