import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src={logo} alt="Логотип компании" />
    </header>
  );
};

Header.propTypes = {
  //
};

export default Header;
