import React from "react";
import Avatar from "./Avatar/Avatar";
import style from './Profile.module.css'
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = ({profile}) => {
    return (
        <div className={style.profile}>
            <Avatar {...profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;