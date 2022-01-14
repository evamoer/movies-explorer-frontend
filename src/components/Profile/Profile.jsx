import React from 'react';

const Profile = () => {
  return (
    <section className="profile section">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__form-row">
          <label className="profile__label" for="profile__input-name">Имя</label>
          <input type="text" className="profile__input" value="Виталий" id="profile__input-name"/>
        </div>
        <hr className="row profile__row"></hr>
        <div className="profile__form-row">
          <label className="profile__label" for="profile__input-email">E-mail</label>
          <input type="text" className="profile__input" value="pochta@yandex.ru" id="profile__input-email"/>
        </div>
        <button type="submit" className="profile__button profile__button_type_submit">Редактировать</button>
      </form>
      <button className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
    </section>
  );
};

export default Profile;
