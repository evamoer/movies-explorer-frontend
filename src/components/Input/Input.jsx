import React from 'react';

const Input = ({ formName, type, name, value, labelText, errorStatus, errorMessage }) => {

  return (
    <div className={`input input_type_${formName}`}>
      <label
        className={`input__label ${formName && `input__label_type_${formName}`}`}
        htmlFor={name}>
        {labelText}
      </label>
      <input
        className={`input__element ${formName && `input__element_type_${formName}`} ${errorStatus && 'input__element_type_error'}`}
        type={type}
        id={name}
        name={name}
        value={value}
        required/>
      {errorStatus && <span className="input__error">{errorMessage}</span>}
    </div>
  )
}

export default Input;
