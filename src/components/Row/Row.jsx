import React from 'react';

const Row = ({rowClassName}) => {
  return (
      <hr className={`row ${rowClassName}`}/>
  );
};

export default Row;
