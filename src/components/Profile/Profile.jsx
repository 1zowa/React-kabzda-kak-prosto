import React from "react";
import Avatar from "./Avatar/Avatar";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'

const Profile = (props) => {

  return (
    <div className={style.profile}>
      <Avatar />
      <MyPosts dataPost={props.dataProfile} addPost={props.addPost} textareaValue={props.textareaValue} />
    </div>
  )
}

export default Profile;