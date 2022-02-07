import React from "react";
import Chats from "./Chats";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        chatsData: state.dialogPage.chatsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)

export default ChatsContainer