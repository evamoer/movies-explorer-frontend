import React from 'react';
import Section from '../Section/Section';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Submit from '../Submit/Submit';
const formElementClassName = 'form__element';

const Login = () => {

  /*
  захардкоженные данные для отображения вёрстки согласно макету;
  код будет изменён на этапе 4;
  */

  return (
    <Section sectionName="login" sectionTitleText={null}>
      <div className="login__logo">
        <Logo />
      </div>
      <h2 className="login__title">Рады видеть!</h2>
      <Form formClassName="login__form'">
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
          value="password"
          labelText="Пароль"
          inputClassName={formElementClassName}
          errorStatus={null}
          errorMessage={null}
          inputErrorClassName={null} />
        <Submit
          formName="login"
          buttonText="Войти"
          questionText="Ещё не зарегистрированы?"
          linkText="Регистрация"
          linkPath='/signup'
          submitClassName={formElementClassName} />
      </Form>
    </Section>
  );
};

export default Login;
