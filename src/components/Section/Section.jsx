import React from 'react';

const Section = ({children, sectionClassName, sectionContentClassName, sectionTitle, sectionTitleClassName}) => {
  return (
    <section className={`section ${sectionClassName}`}>
      <div id={sectionContentClassName} className={`section__content ${sectionContentClassName}`}>
        {(sectionTitle) && <h2 className={`section__title ${sectionTitleClassName}`}>{sectionTitle}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
