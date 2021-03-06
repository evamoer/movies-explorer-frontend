import React from 'react';
import Section from "../Section/Section";
import Row from "../Row/Row";
import Portfolio from "../Portfolio/Portfolio";
import imagepath from '../../images/student.png';

/**
 * AboutMe - компонент "Обо мне".
 */
const AboutMe = () => {

  return (
    <Section sectionName = "aboutme" sectionTitleText="Студент">
      <Row rowClassName="aboutme__row"/>
      <div className="aboutme__info">
        <figure className="aboutme__info-content aboutme__info-content_type_photo">
          <img src={imagepath} alt="Фотография студента" className="aboutme__photo"/>
        </figure>
        <div className="aboutme__info-content aboutme__info-content_type_text">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб&#8209;разработке,
            начал заниматься фриланс&#8209;заказами&nbsp;и ушёл с постоянной работы.</p>
          <ul className="aboutme__social-list">
            <li className="aboutme__social-item">
              <a href="https://www.facebook.com/iermoeva" className="aboutme__social-link" rel="noreferrer" target="_blank">Facebook</a>
            </li>
            <li className="aboutme__social-item">
              <a href="https://github.com/evamoer" className="aboutme__social-link" rel="noreferrer" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
      <Portfolio />
    </Section>
  );
};

export default AboutMe;
