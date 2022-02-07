import React from "react";
import style from './Friends.module.css'

const Friends = ({dataSidebar}) => {


    return (
        <div className={style.sidebar__friend}>
            <p>Friends</p>
            <ul className={style.friends__list}>
                <li className={style.friend}>
                    <div className={style.friend__avatar} style={{backgroundImage: `url(${dataSidebar[0].image})`}}></div>
                </li>
                <li className={style.friend}>
                    <div className={style.friend__avatar} style={{backgroundImage: `url(${dataSidebar[1]['image']})`}}></div>
                </li>
                <li className={style.friend}>
                    <div className={style.friend__avatar} style={{backgroundImage: `url(${dataSidebar[2]['image']})`}}></div>
                </li>
            </ul>
        </div>
    )
}

export default Friends