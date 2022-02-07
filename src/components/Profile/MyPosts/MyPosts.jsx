import React from "react";
import style from './MyPosts.module.css'

const MyPosts = ({myPostData,postText,addPost,onChangeFunc}) => {

  let addPostButton = React.createRef()

  let onchange = () => {
    let text = addPostButton.current.value
      onChangeFunc(text)
  }

  const MyPost = () => {
    return myPostData.map((elem, index) => {
      return (
        <div className={style.myPost} key={index}>
          <div className={style.myPost__avatar}></div>
          <p>{elem.comment}</p>
        </div>
      )
    })
  }

  return (
      <div className={style.myPostWrapper}>
          <textarea ref={addPostButton} value={postText} onChange={onchange}></textarea>
          <button onClick={addPost}>Submit</button>
          <MyPost/>
      </div>
  )
}

export default MyPosts