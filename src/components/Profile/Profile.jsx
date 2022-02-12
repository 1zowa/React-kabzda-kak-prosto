import React from "react";
import Avatar from "./Avatar/Avatar";
import style from './Profile.module.css'
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <Avatar {...props.profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;