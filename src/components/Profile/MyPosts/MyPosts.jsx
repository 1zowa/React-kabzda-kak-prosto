import React from "react";
import style from './MyPosts.module.css'

const MyPosts = (props) => {

  let addPostButton = React.createRef()

  let addPost = () => {
    props.addPost()
    props.textareaValue('')
  }

  let onchange = () => { 
    let text = addPostButton.current.value
    props.textareaValue(text)
  }

  const MyPost = () => {
    return props.dataPost.myPostData.map((elem, index) => {
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
      <textarea ref={addPostButton} value={props.dataPost.postText} onChange={onchange}></textarea>
      <button onClick={addPost}>Submit</button>
      <MyPost />
    </div>
  )
}

export default MyPosts