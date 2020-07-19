import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

export default function Navbar({ signOut, username, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <nav>
        <button id="signOut" onClick={signOut}>
          Sign Out
        </button>
        <Link to={'/users/' + username}>
          <button id="user">{username}</button>
        </Link>
        <Link to="/home">
          <button id="home">
            <Translate value="Navbar.Home" />
          </button>
        </Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to="/login">
          <button id="signIn">Sign In</button>
        </Link>

        <Link to="/register">
          <button id="signUp">Sign Up</button>
        </Link>
        <Link to="/home">
          <button id="home">Home</button>
        </Link>
      </nav>
    );
  }
}
