import React from "react";
import Chats from "./Chats";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        chatsData: state.dialogPage.chatsData
    }
}

const ChatsContainer = connect(mapStateToProps, {})(Chats)

export default ChatsContainer