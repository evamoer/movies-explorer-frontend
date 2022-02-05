import React from 'react';
import SideBarMenu from './SideBarMenu/SideBarMenu';
import UpperMenu from './UpperMenu/UpperMenu';

/**
 * LoggedInNavigation - компонент навигации при авторизованном пользователе.
 */
const LoggedInNavigation = () => {

  return (
    <>
      <SideBarMenu />
      <UpperMenu />
    </>
  )
};

export default LoggedInNavigation;
