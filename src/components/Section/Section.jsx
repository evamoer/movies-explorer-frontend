import React from 'react';

/**
 * Section - компонент секции.
 *
 * @param children - внутренние компоненты
 * @param sectionName - название секции
 * @param sectionTitleText - заголовок секции
 */
const Section = ({ children, sectionName, sectionTitleText }) => {
  return (
    <section className={`section section_type_${sectionName}`}>
      <div id={sectionName} className={`section__content ${sectionName}`}>
        {(sectionTitleText) && <h2 className={`section__title ${sectionName}__title`}>{sectionTitleText}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
