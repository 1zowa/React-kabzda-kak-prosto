import React, {createRef} from 'react'
import style from './Users.module.css'

const Users = (props) => {

    function onClickFunc(user) {

        let text;

        if(user.followed) {
            text = 'UNFOLLOW'
        } else {
            text = 'FOLLOW'
        }
        props.checkFollowStatus(text,user.id)
    }

    return (<div className={style.users}>
            {props.users.map(elem => {
                return (
                    <div className={style.user} key={elem.id}>
                        <div>
                            <div className={style.users__avatar} style={{
                                backgroundImage: `url(${elem.photos.small === null
                                    ? 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'
                                    : elem.photos.small})`
                            }}/>
                            <button className={style.followBtn}
                                    onClick={() => onClickFunc(elem)}>{elem.followed ? 'UNFOLLOW' : "FOLLOW"}</button>
                        </div>
                        <div>
                            <p>{elem.name}</p>
                            <p className={style.user__status}>{`Status:${elem.status !== null ? elem.status : ' '}`}</p>
                            <p>{`elem.location.country`}</p>
                            <p>{`elem.location.city`}</p>
                        </div>
                    </div>
                )
            })}
            <div className={style.btn__container}>
                <button className={style.moreBtn}
                        onClick={() => props.MoreUsers()}>{`Show More (${props.users.length}) + 8`}</button>
            </div>
        </div>
    )
}

export default Users