import React from 'react';
import { useHistory } from "react-router-dom";

/**
 * NotFound - компонент для несуществующего роута.
 */
const NotFound = () => {

  /**
   * Хук для подключения history.
   */
  let history = useHistory();

  return (
    <section className="notfound section">
      <div className="notfound__content">
        <div className="notfound__info">
          <h2 className="notfound__title">404</h2>
          <p className="notfound__subtitle">Страница не найдена</p>
        </div>
        <button className="notfound__button" onClick={() => history.goBack()}>Назад</button>
      </div>
    </section>
  );
};

export default NotFound;
