import React, { useState } from "react";
import Mybutton from "./UI/Mybutton/Mybutton";
import Myinput from "./UI/Myinput/Myinput";

const PostForm = ({create}) => {

  const [postInfo, setPostInfo] = useState({title: '', content: ''})

  const addSetPost = (e) => {
    e.preventDefault();
  
    const newPost = {...postInfo, id: Date.now()}
    create(newPost)
  
    setPostInfo({title: '', content: ''})
  }
    
  return (
    <form>

      <Myinput
        type = "text"
        placeholder = "Post name"
        value = {postInfo.title}
        onChange = {e => setPostInfo({...postInfo, title: e.target.value})}
      />

      <Myinput
        type = "text"
        placeholder="Post content"
        value = {postInfo.content}
        onChange = {e => setPostInfo({...postInfo, content: e.target.value})}
      />

    <Mybutton onClick = {addSetPost} >Create post</Mybutton>

    </form>
  );
};

export default PostForm