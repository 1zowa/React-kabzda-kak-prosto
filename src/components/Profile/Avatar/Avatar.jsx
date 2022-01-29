import React from "react";
import style from './Avatar.module.css'

const Avatar = (props) => {
  return (
    <div className={style.avatar}>
      <div className={style.avatar__photo}></div>
    </div>
  )
}

export default Avatar