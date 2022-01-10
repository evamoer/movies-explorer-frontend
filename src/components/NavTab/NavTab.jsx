import React from 'react';

const NavTab = () => {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__item">
          <a href="#" className="navtab__link">О проекте</a>
        </li>
        <li className="navtab__item">
          <a href="#" className="navtab__link">Технологии</a>
        </li>
        <li className="navtab__item">
          <a href="#" className="navtab__link">Студент</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
