import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './style.module.scss'

const Header = () => {
  return (
    <div className= {styles.header}>
      <img src={logo} alt='Logo' />
    </div>
  );
};

export default Header;