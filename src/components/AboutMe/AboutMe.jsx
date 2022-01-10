import React from 'react';
import imagepath from '../../images/photo-1641805963238-a8d4717575d6.jpg';

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <hr className="aboutme__row"></hr>
      <figure className="aboutme__image-container">
        <img src={imagepath} alt="Фотография студента" className="aboutme__image"/>
      </figure>
      <h3 className="aboutme__name">Виталий</h3>
      <p className="aboutme__info">Фронтенд-разработчик, 30 лет</p>
      <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ.
        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
        Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
        После того, как прошёл курс по веб&#8209;разработке,
        начал заниматься фриланс&#8209;заказами&nbsp;и ушёл с постоянной работы.</p>
      <ul className="aboutme__social-list">
        <li className="aboutme__social-item">
          <a href="#" className="aboutme__social-link">Facebook</a>
        </li>
        <li className="aboutme__social-item">
          <a href="#" className="aboutme__social-link">Github</a>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
