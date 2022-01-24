import React from 'react';
import Row from "../Row/Row";
const footerRowClassName = 'footer__row';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <Row rowClassName={footerRowClassName}/>
        <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Github</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Facebook</a>
            </li>
          </ul>
          <p className="footer__copyright">© 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
