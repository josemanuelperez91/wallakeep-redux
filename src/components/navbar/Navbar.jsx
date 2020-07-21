import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

export default function Navbar({ signOut, username, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <nav>
        <button id="signOut" onClick={signOut}>
          <Translate value="Navbar.sigout"></Translate>
        </button>
        <Link to={'/myaccount'}>
          <button id="user">{username}</button>
        </Link>
        <Link to="/home">
          <button id="home">
            <Translate value="Navbar.home" />
          </button>
        </Link>
      </nav>
    );
  } else {
    return (
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
        <Link to="/home">
          <button id="home">
            <Translate value="Navbar.home" />
          </button>
        </Link>
      </nav>
    );
  }
}
