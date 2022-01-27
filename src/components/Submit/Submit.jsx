import React from 'react';
import { Link } from 'react-router-dom';

const Submit = ({ formName, buttonText, questionText, linkText, linkPath }) => {
  return (
    <div className={`submit ${`submit_type_${formName}`}`}>
      <button
      className={`submit__button ${`submit__button_type_${formName}`}`}
      type="submit">
        {buttonText}
      </button>
        {questionText && (
          <div className="submit__prompt">
          <p className="submit__question">{questionText}</p>
          <Link className="submit__link" to={linkPath}>{linkText}</Link>
        </div>
        )}

    </div>
  )
}

export default Submit;
