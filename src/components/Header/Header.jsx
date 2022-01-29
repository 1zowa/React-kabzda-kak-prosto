import React from 'react';
import style from './Header.module.css'

const Header = (props) => {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>React Network </h1>
    </header>
  )
}

export default Header