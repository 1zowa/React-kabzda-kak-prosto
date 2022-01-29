import React from "react";
import style from './Sidebar.module.css'
import { NavLink } from "react-router-dom";


const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <ul className={style.sidebar__list}>
        
          <NavLink to={'/profile'} className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}`:style.sidebar__item}>Profile</NavLink>
          <NavLink to={"/dialogs"} className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}`:style.sidebar__item}>Dialogs</NavLink>
          <NavLink to={"/music"} className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}`:style.sidebar__item}>Music</NavLink>
          <NavLink to={"/videos"} className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}`:style.sidebar__item}>Videos</NavLink>
          <NavLink to={"/setting"} className={({isActive}) => isActive ? `${style.activeLink} ${style.sidebar__item}`:style.sidebar__item}>Settings</NavLink>

          <div className={style.sidebar__friend}>
          <p>Friends</p>
          <ul className={style.friends__list}>
            <li className={style.friend}>
              <div className={style.friend__avatar} style={{backgroundImage : `url(${props.dataSidebar[0].image})`}}></div>
            </li>
            <li className={style.friend}>
              <div className={style.friend__avatar} style={{backgroundImage : `url(${props.dataSidebar[1]['image']})`}}></div>
            </li>
            <li className={style.friend}>
              <div className={style.friend__avatar} style={{backgroundImage : `url(${props.dataSidebar[2]['image']})`}}></div>
            </li>
          </ul>
          </div>
        
      </ul>
    </div>
  )
}

export default Sidebar