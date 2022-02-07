import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {postCreator, updatePostCreator} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        postText: state.profilePage.postText,
        myPostData: state.profilePage.myPostData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(postCreator())
        },
        onChangeFunc: (text) => {
            dispatch(updatePostCreator(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostContainer;