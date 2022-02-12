import React from "react";
import {useParams} from "react-router-dom";
import style from './DialogItem.module.css'

const DialogsItem = ({messageData, messageField, textareaValue, onclickFunc}) => {

    let messagesWrapper = React.createRef()
    let textareaField = React.createRef()

    let getValue = () => {
        let text = textareaField.current.value;
        textareaValue(text)
    }
    let { chatId } = useParams()
    let arr = messageData.filter((elem) => elem.user === chatId || elem.user === ('me' + chatId))

    const DialogItem = () => {
        return arr.map((elem, index) => {
            return (
                <li className={`${style.dialog} ${elem.user === ('me' + chatId) ? style.me : style.friend}`}
                    key={index}>
                    <p className={style.user}>{elem.message}</p>
                </li>
            )
        })
    }

    return (
        <div className={style.dialogs__dialogItem}>
            <ul className={style.dialogItem__list} ref={messagesWrapper}>
                <DialogItem/>
            </ul>
            {arr.length !== 0 ?
                <div className={style.dialogItem__buttons}>
                    <textarea ref={textareaField} value={messageField} onChange={getValue}></textarea>
                    <button onClick={() => onclickFunc(chatId)}>Send</button>
                </div> : null
            }
        </div>
    )
}

export default DialogsItem