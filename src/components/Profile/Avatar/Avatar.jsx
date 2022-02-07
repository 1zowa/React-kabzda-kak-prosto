import React from "react";
import style from './Avatar.module.css'

const Avatar = ({photos, fullName, aboutMe, contacts}) => {
    console.log(contacts)

    const Contact = () => {
        return contacts !== null && contacts !== undefined
            ? Object.entries(contacts).map(([key, value], index) => {
                return value !== null
                    ? <div key={index}>
                        <span>{key}: </span>
                        <a href={value}>{value}</a>
                    </div> : null})
            : ''
    }

    return (
        <div>
            <div className={style.avatar}>
                {photos !== undefined
                    ? <div className={style.avatar__photo} style={{backgroundImage: `url(${photos.small})`}}></div>
                    : null
                }
            </div>
            <p className={style.avatar__name}>{fullName}</p>
            <dl>
                <dt>About Me:</dt>
                <dd>{aboutMe}</dd>
                <dt>Contacts:</dt>
                <dd>
                    <Contact/>
                </dd>
            </dl>
        </div>
    )
}

export default Avatar