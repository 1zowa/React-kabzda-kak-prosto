import React from "react";
import Chats from "./Chats/Chats";
import Dialog from "./DialogItem/DialogItem";
import style from './Dialogs.module.css'
import './Dialogs.module.css'

const Dialogs = (props) => {

  return (
    <div className={style.dialogs}>
      <Chats dataDialogs={props.dataDialogs} />
      <Dialog dataDialogs={props.dataDialogs} dispatch={props.dispatch} />
      
    </div>
  )
}

export default Dialogs