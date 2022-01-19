import React from 'react';

const Section = ({children, sectionClassName, sectionContentClassName, sectionTitle, sectionTitleClassName}) => {
  return (
    <section className={`section ${sectionClassName}`}>
      <div className={`section__content ${sectionContentClassName}`}>
        <h2 className={`section__title ${sectionTitleClassName}`}>{sectionTitle}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
