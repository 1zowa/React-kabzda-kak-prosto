import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const DialogsContainer = (props) => {
    return (
        <Dialogs {...props} />
    )
}

const mapStateToProps = (state) => {
    return {}
}
export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsContainer)
