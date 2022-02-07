import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <ul className={style.sidebar__list}>
            <NavLink to={'/profile'}
                     className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}` : style.sidebar__item}>Profile</NavLink>
            <NavLink to={"/dialogs"}
                     className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}` : style.sidebar__item}>Dialogs</NavLink>
            <NavLink to={"/music"}
                     className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}` : style.sidebar__item}>Music</NavLink>
            <NavLink to={"/videos"}
                     className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}` : style.sidebar__item}>Videos</NavLink>
            <NavLink to={'/users'}
                     className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item} ${style.users}` : `${style.sidebar__item} ${style.users}`}>All Users</NavLink>
            <NavLink to={"/setting"}
                     className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}` : style.sidebar__item}>Settings</NavLink>
        </ul>
    )
}

export default Navbar