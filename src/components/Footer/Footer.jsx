import React from 'react';
import Row from "../Row/Row";
const footerRowClassName = 'footer__row';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <Row rowClassName={footerRowClassName}/>
      <div className="footer__content">
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">Яндекс.Практикум</a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">Github</a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">Facebook</a>
          </li>
        </ul>
        <p className="footer__copyright">©2022</p>
      </div>
    </footer>
  );
};

export default Footer;
