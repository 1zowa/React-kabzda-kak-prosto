import React from "react";
import Chats from "./Chats/Chats";
import Dialog from "./DialogItem/DialogItem";
import style from './Dialogs.module.css'
import './Dialogs.module.css'
import { Route, Routes } from "react-router-dom";
import FirstDialog from "./DialogItem/FirstDialog/FirstDialog";
import SecondDialog from "./DialogItem/SecondDialog/SecondDialog";
import ThirdDialog from "./DialogItem/ThirdDialog/ThirdDialog";
import FourthDialog from "./DialogItem/FourthDialog/FourthDialog";
import FifthDialog from "./DialogItem/FifthDialog/FifthDialog";
import SixthDialog from "./DialogItem/SixthDialog/SixthDialog";

const Dialogs = (props) => {

  return (
    <div className={style.dialogs}>
      <Chats dataDialogs={props.dataDialogs} />
      
      <Dialog dataDialogs={props.dataDialogs} addMessage={props.addMessage} messageValue={props.messageValue} /> 
        
        
      {/* <FifthDialog /> */}
    </div>
  )
}

export default Dialogs