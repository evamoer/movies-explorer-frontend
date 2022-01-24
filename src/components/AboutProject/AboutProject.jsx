import React from 'react';
import Row from "../Row/Row";
import Section from "../Section/Section";
const aboutProjectRowClassName = 'aboutproject__row';
const aboutProjectSectionClassName = 'section_type_aboutproject';
const aboutProjectContentClassName = 'aboutproject';
const aboutProjectTitle = 'О проекте';
const aboutProjectTitleClassName = 'aboutproject__title';

const AboutProject = () => {

  return (
    <Section sectionClassName={aboutProjectSectionClassName} sectionContentClassName={aboutProjectContentClassName} sectionTitle={aboutProjectTitle} sectionTitleClassName={aboutProjectTitleClassName}>
      <Row rowClassName={aboutProjectRowClassName}/>
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
