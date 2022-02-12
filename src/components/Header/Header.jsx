import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({auth, isAuth}) => {
    return (
        <header className={style.header}>
            <h1 className={style.header__title}>React Network </h1>
            {isAuth
                ? <div className={style.authUser}>
                    {auth.photos.small !== null && auth.photos.small !== undefined && auth.photos.small !== ''
                        ?
                        <div className={style.authUser__avatar} style={{backgroundImage: `url(${auth.photos.small})`}}/>
                        : <div className={style.authUser__avatar}/>
                    }
                    <span>{auth.login}</span>
                </div>
                : <NavLink to="login">
                    <button className={style.login}>Login</button>
                </NavLink>
            }
        </header>
    );
};

export default Header;