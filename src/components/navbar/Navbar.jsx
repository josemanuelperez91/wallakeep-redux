import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import Header from '../header/Header';
export default function Navbar({ signOut, username, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div>
        <nav>
          <button id="signOut" onClick={signOut}>
            <Translate value="Navbar.sigout"></Translate>
          </button>
          <Link to={'/create'}>
            <button id="new">
              <Translate value="Navbar.new"></Translate>
            </button>
          </Link>

          <Link to={'/myaccount'}>
            <button id="user">{username}</button>
          </Link>
        </nav>
        <Header></Header>
      </div>
    );
  } else {
    return (
      <div>
        <nav>
          <Link to="/login">
            <button id="signIn">
              <Translate value="Navbar.signin" />
            </button>
          </Link>
          <Link to="/register">
            <button id="signUp">
              <Translate value="Navbar.signup" />
            </button>
          </Link>
        </nav>
        <Header></Header>
      </div>
    );
  }
}
