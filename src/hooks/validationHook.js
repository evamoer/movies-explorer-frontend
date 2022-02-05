import React from 'react';
import { useState, useCallback } from "react";

/**
 * Функция для взаимодействия с формой и её валидации.
 */
function useFormAndValidation() {

  /**
   * Переменные для состояний значений, ошибок и валидности формы.
   */
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  /**
   * Обработчик изменения состояний элементов формы.
   */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: evt.target.validity.typeMismatch ? 'Неправильный формат данных.' : evt.target.validationMessage,
    });
    setIsValid(evt.target.closest("form").checkValidity());
  };

  /**
   * Функция для сброса всех состояний формы.
   */
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}

export default useFormAndValidation;
