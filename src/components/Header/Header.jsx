import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://static3.depositphotos.com/1010843/264/i/600/depositphotos_2642625-stock-photo-hamster.jpg"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
