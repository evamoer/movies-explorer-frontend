import React from 'react';
import Section from '../Section/Section';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Row from '../Row/Row';
import Submit from '../Submit/Submit';

const Profile = () => {
  return (
    <Section sectionName="profile" sectionTitleText={null}>
      <h2 className="profile__title">Привет, Виталий!</h2>
      <Form formClassName="profile__form">
        <Input
          formName="profile"
          type="text"
          name="name"
          value="Виталий"
          labelText="Имя"
          errorStatus={null}
          errorMessage={null}/>
        <Row rowClassName="profile__row" />
        <Input
          formName="profile"
          type="text"
          name="email"
          value="pochta@yandex.ru"
          labelText="E-mail"
          errorStatus={null}
          errorMessage={null} />
        <Submit
          formName="profile"
          buttonText="Редактировать"
          questionText={null}
          linkText={null}
          linkPath={null}
          submitClassName={null}/>
        <button type="button" className="profile__logout-button">Выйти из аккаунта</button>
      </Form>
    </Section>
  );
};

export default Profile;
