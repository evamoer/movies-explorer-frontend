import React from 'react';
import Section from '../Section/Section';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Submit from '../Submit/Submit';
const registerSectionClassName = 'section_type_register';
const registerContentClassName = 'register';
const formElementClassName = 'form__element';

const Register = () => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  код будет изменён на этапе 4;
  */

  return (
    <Section sectionName="register" sectionTitleText={null}>
      <div className="register__logo">
        <Logo />
      </div>
      <h2 className="login__title">Добро пожаловать!</h2>
      <Form>
        <Input
          type="text"
          name="name"
          value="Виталий"
          labelText="Имя"
          inputClassName={formElementClassName}
          errorStatus={null}
          errorMessage={null}
          inputErrorClassName={null} />
        <Input
          type="text"
          name="email"
          value="pochta@yandex.ru"
          labelText="E-mail"
          inputClassName={formElementClassName}
          errorStatus={null}
          errorMessage={null}
          inputErrorClassName={null} />
        <Input
          type="password"
          name="password"
          value="passwordpasswo"
          labelText="Пароль"
          inputClassName={formElementClassName}
          errorStatus={true}
          errorMessage={'Что-то пошло не так...'}
          inputErrorClassName={null} />
        <Submit
          formName="register"
          buttonText="Зарегистрироваться"
          questionText="Уже зарегистрированы?"
          linkText="Войти"
          linkPath="/signin"
          submitClassName={formElementClassName} />
      </Form>
    </Section>
  );
};

export default Register;

