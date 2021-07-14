import React from 'react';
import './style.css';
const Header = ({ title, subTitle }) => {
  return (
    <header className="header__container--area">
      <div className="header__subTitle">{subTitle}</div>
      <div className="header__title">{title}</div>
    </header>
  );
};
export default Header;