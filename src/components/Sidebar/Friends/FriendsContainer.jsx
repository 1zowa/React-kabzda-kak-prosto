import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
    return {
        dataSidebar: state.sidebarPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsContainer