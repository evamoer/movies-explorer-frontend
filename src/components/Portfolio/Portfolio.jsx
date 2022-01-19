import React from 'react';
import Row from "../Row/Row";
const portfolioRowClassName = 'portfolio__row';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            <p className="portfolio__website">Статичный сайт</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
          <Row rowClassName={portfolioRowClassName}/>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            <p className="portfolio__website">Адаптивный сайт</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
          <Row rowClassName={portfolioRowClassName}/>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            <p className="portfolio__website">Одностраничное приложение</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
