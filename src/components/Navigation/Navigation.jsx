import React, {useState} from 'react';

const Navigation = ({loggedIn}) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuButtonClick = () => {
    setActiveMenu(!activeMenu);
  }

  return (
    <>
      {loggedIn && (
        <>
          <button
            className={`navigation__menu-button ${activeMenu && 'navigation__menu-button_type_close'}`}
            onClick={handleMenuButtonClick}
          />
          <nav className={`navigation__menu_type_logged-in ${activeMenu && 'navigation__menu_type_active'}`}>
            <ul className="navigation__menu-list_type_logged-in">
              <li className="navigation__menu-item_type_logged-in">
                <a href="/" className="navigation__menu-link_type_logged-in">Главная</a>
              </li>
              <li className="navigation__menu-item_type_logged-in">
                <a href="/movies" className="navigation__menu-link_type_logged-in">Фильмы</a>
              </li>
              <li className="navigation__menu-item_type_logged-in">
                <a href="/savedmovies" className="navigation__menu-link_type_logged-in">Сохранённые фильмы</a>
              </li>
              <li className="navigation__menu-item_type_logged-in navigation__menu-item_type_profile">
                <button className="navigation__menu-link_type_profile"/>
              </li>
            </ul>
          </nav>
        </>
      )}
      {!loggedIn && (
        <nav className="navigation_menu_type_logged-out">
          <ul className="navigation__menu-list_type_logged-out">
            <li className="navigation__menu-item_type_logged-out">
              <a href="/signup" className="navigation__menu-link_type_logged-out navigation__menu-link_type_signup">Регистрация</a>
            </li>
            <li className="navigation__menu-item_type_logged-out">
              <a href="/signin" className="navigation__menu-link_type_logged-out navigation__menu-link_type_signin">Войти</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Navigation;
