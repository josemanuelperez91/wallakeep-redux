import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import Form from './Form';
import Input from './Input';
import Button from './Button';

function Login({ signIn }) {
  const onSubmit = (formData) => {
    signIn(formData);
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <Form initialValue={{ username: '', password: '' }} onSubmit={onSubmit}>
        <Input type="text" name="username" placeholder="User Name"></Input>
        <Input type="password" name="password" placeholder="Password"></Input>
        <Button className="greenButton" type="submit">
          Sign In
        </Button>
      </Form>

      <button type="button">
        <Link to="/register">I dont have an accout</Link>
      </button>
    </div>
  );
}
export default withRouter(Login);
