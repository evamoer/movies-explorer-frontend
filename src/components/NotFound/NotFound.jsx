import React from 'react';

const NotFound = () => {
  return (
    <section className="notfound section">
      <div className="notfound__content">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <a className="notfound__link" href="#">Назад</a>
    </section>
  );
};

export default NotFound;
