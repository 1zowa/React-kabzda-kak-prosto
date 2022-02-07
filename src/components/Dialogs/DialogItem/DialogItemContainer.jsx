import React from "react";
import {connect} from "react-redux";
import DialogItem from "./DialogItem";
import {MessageCreator, updateMessageCreator} from "../../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        messageData: state.dialogPage.messageData,
        messageField: state.dialogPage.messageField,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        textareaValue: (text) => {
            dispatch(updateMessageCreator(text))
        },
        onclickFunc: (userID) => {
            dispatch(MessageCreator(userID))
        }
    }
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem)

export default DialogItemContainer