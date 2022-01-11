import React from 'react';

const AboutProject = () => {
  return (
    <section className="aboutproject section">
      <h2 className="section__title aboutproject__title">О проекте</h2>
      <hr className="row aboutproject__row"></hr>
      <ul className="aboutproject__list">
        <li className="aboutproject__item">
          <h3 className="section__title aboutproject__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="section__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="aboutproject__item">
          <h3 className="section__title aboutproject__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="section__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="aboutproject__ratio">
        <p className="aboutproject__ratio-part aboutproject__ratio-part_type_backend">1 неделя</p>
        <p className="aboutproject__ratio-part aboutproject__ratio-part_type_frontend">4 недели</p>
      </div>

    </section>
  );
};

export default AboutProject;
