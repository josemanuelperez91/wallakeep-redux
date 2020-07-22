import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Link to={'/'}>
      <div className={'Header'}>
        <img alt="logo" className="logo" src="/logo192.png"></img>
        <h1 className={'appname'}>Gamepop</h1>
      </div>
    </Link>
  );
}
