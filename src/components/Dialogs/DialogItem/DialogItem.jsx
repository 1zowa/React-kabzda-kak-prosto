import React from "react";
import style from './DialogItem.module.css'

const DialogsItem = (props) => {

  let messagesWrapper = React.createRef()
  let textareaField = React.createRef()

  let getTeaxtareaValue = () => {
    let text = textareaField.current.value;
    props.messageValue(text)
  }

  console.log(props.dataDialogs)

  const DialogItem = () => {
    return props.dataDialogs.messageData.map((elem, index) => {
      return (
        <li className={`${style.dialog} ${elem.user === 'me' ? style.me : style.friend}`} key={index} >
          <p className={style.user}>{elem.message}</p>
        </li>
      )
    })
  }

  return (
    <div className={style.dialogs__dialogItem}>
      <ul className={style.dialogItem__list} ref={messagesWrapper} >
        <DialogItem />
      </ul>
      <div className={style.dialogItem__buttons}>
        <textarea ref={textareaField} value={props.dataDialogs.messageField} onChange={getTeaxtareaValue}></textarea>
        <button onClick={props.addMessage}>Send</button>
      </div>
    </div>
  )
}

export default DialogsItem