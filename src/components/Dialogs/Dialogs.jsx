import React from "react";
import style from './Dialogs.module.css'
import './Dialogs.module.css'
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import ChatsContainer from "./Chats/ChatsContainer";

const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <ChatsContainer/>
            <DialogItemContainer/>
            {/*<Dialog dataDialogs={props.dataDialogs} dispatch={props.dispatch} />*/}

        </div>
    )
}

export default Dialogs