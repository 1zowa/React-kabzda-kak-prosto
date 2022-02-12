import React from "react";
import style from './Dialogs.module.css';
import './Dialogs.module.css';
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import ChatsContainer from "./Chats/ChatsContainer";
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <ChatsContainer/>
            <DialogItemContainer/>
        </div>
    )
}

export default Dialogs