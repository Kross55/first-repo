import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://static3.depositphotos.com/1010843/264/i/600/depositphotos_2642625-stock-photo-hamster.jpg"
        alt="logo"
      />
      <div className={s.loginBlock}>
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
