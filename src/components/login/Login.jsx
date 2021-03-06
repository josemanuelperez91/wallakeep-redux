import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

import Form from '../form/Form';
import Input from '../form/Input';
import Button from '../form/Button';
import Header from '../header/Header';
import './Login.css';

function Login({ signIn }) {
  const onSubmit = (formData) => {
    signIn(formData);
  };
  return (
    <div className="Login">
      <Header></Header>

      <h1>
        <Translate value="Login.title" />
      </h1>
      <Form initialValue={{ username: '', password: '' }} onSubmit={onSubmit}>
        <Translate value="Login.usernameInput" />
        <Input
          type="text"
          name="username"
          otherProps={{
            required: true,
          }}
        ></Input>
        <Translate value="Login.passwordInput" />
        <Input
          type="password"
          name="password"
          otherProps={{
            required: true,
            autoComplete: 'password',
          }}
        ></Input>
        <Button className="greenButton" type="submit">
          <Translate value="Login.submit" />
        </Button>
      </Form>

      <Link to="/register">
        <button type="button">
          <Translate value="Login.cancel" />
        </button>
      </Link>
    </div>
  );
}
export default withRouter(Login);
