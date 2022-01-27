import React from 'react';
import Row from "../Row/Row";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/evamoer/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__website">Статичный сайт</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
          <Row rowClassName="portfolio__row"/>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/evamoer/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__website">Адаптивный сайт</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
          <Row rowClassName="portfolio__row"/>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/evamoer/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noreferrer">
            <p className="portfolio__website">Одностраничное приложение</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
