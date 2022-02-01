import React from "react";
import style from './MyPosts.module.css'
import {postCreator, updatePostCreator} from "../../../redux/profile-reducer";

const MyPosts = ({dataPost,dispatch}) => {

  let addPostButton = React.createRef()

  let addPost = () => {
    dispatch(postCreator());
  }

  let onchange = () => { 
    let text = addPostButton.current.value
    dispatch(updatePostCreator(text))
  }

  const MyPost = () => {
    return dataPost.myPostData.map((elem, index) => {
      return (
        <div className={style.myPost} key={index}>
          <div className={style.myPost__avatar}></div>
          <p>{elem.comment}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <textarea ref={addPostButton} value={dataPost.postText} onChange={onchange}></textarea>
      <button onClick={addPost}>Submit</button>
      <MyPost />
    </div>
  )
}

export default MyPosts