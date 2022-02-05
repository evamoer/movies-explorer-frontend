import React from 'react';

/**
 * Row - компонент с линией.
 *
 * @param rowClassName - класс для линии.
 */
const Row = ({ rowClassName }) => {
  return (
      <hr className={`row ${rowClassName}`}/>
  );
};

export default Row;
