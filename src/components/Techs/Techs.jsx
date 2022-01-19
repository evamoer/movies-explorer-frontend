import React from 'react';
import Section from "../Section/Section";
import Row from "../Row/Row";
const techsRowClassName = 'techs__row';
const techsSectionClassName = 'section_type_techs';
const techsContentClassName = 'techs';
const techsTitle = 'Технологии';
const techsTitleClassName = 'techs__title';

const Techs = () => {
  return (
    <Section sectionClassName={techsSectionClassName} sectionContentClassName={techsContentClassName} sectionTitle={techsTitle} sectionTitleClassName={techsTitleClassName}>
      <Row rowClassName={techsRowClassName}/>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__item">
          <p className="techs__name">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__name">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__name">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__name">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__name">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__name">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__name">MongoDB</p>
        </li>
      </ul>
    </Section>
  );
};

export default Techs;
