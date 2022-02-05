import React from 'react';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

/**
 * Main - компонент Main по роуту "/".
 */
const Main = () => {

  return (
    <>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </>
  );
};

export default Main;
