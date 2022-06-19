import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://static3.depositphotos.com/1010843/264/i/600/depositphotos_2642625-stock-photo-hamster.jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
