import React from 'react';

const Form = ({ formClassName, children }) => {
  return (
    <form className={`form ${formClassName}`}>
      {children}
    </form>
  )
}

export default Form;
