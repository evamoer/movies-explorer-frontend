import React from 'react';
import Row from "../Row/Row";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <Row rowClassName="footer__row"/>
        <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/evamoer" className="footer__link" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="footer__item">
              <a href="https://www.facebook.com/iermoeva" className="footer__link" target="_blank" rel="noreferrer">Facebook</a>
            </li>
          </ul>
          <p className="footer__copyright">© 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
