import React from 'react';
import LoggedOutNavigation from './LoggedOutNavigation/LoggedOutNavigation';
import LoggedInNavigation from "./LoggedInNavigation/LoggedInNavigation";

/**
 * Navigation - компонент с навигацией.
 *
 * @param isLoggedIn - состояние авторизации пользователя.
 */
const Navigation = ({ isLoggedIn }) => {

  return (
    <>
      { isLoggedIn ? <LoggedInNavigation /> : <LoggedOutNavigation /> }
    </>
  )
}

export default Navigation;
