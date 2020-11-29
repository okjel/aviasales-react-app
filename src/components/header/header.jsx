import React from 'react';
import classes from './header.module.scss';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src={logo} alt="Логотип компании" />
    </header>
  );
};

export default Header;
