import React from 'react';
import Section from "../Section/Section";
import Row from "../Row/Row";

/**
 * AboutProject - компонент "О проекте".
 */
const AboutProject = () => {

  return (
    <Section sectionName = "aboutproject" sectionTitleText="О проекте">
      <Row rowClassName="aboutproject__row"/>
      <ul className="aboutproject__list">
        <li className="aboutproject__item">
          <h3 className="aboutproject__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutproject__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="aboutproject__item">
          <h3 className="aboutproject__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutproject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="aboutproject__ratio">
        <li className="aboutproject__ratio-part aboutproject__ratio-part_type_backend"></li>
        <li className="aboutproject__ratio-part aboutproject__ratio-part_type_frontend"></li>
      </ul>
    </Section>
  );
};

export default AboutProject;
