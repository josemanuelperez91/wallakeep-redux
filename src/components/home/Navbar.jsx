import React from 'react';
import './Navbar.css';

export default function Navbar({ signOut, username }) {
  return (
    <nav>
      <button id="signOut" onClick={signOut}>
        Sign Out
      </button>
      <button id="user">{username}</button>
    </nav>
  );
}
