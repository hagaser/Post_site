import React, { useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const PostForm = ({create}) => {

  const [postInfo, setPostInfo] = useState({title: "", body: ""});

  const addSetPost = (e) => {
    e.preventDefault();
  
    const newPost = {...postInfo, id: Date.now()};
    create(newPost);
  
    setPostInfo({title: "", body: ""});
  }
    
  return (

    <form>

      <MyInput
        type = "text"
        placeholder = "Post name"
        value = {postInfo.title}
        onChange = {e => setPostInfo({...postInfo, title: e.target.value})}
      />

      <MyInput
        type = "text"
        placeholder="Post content"
        value = {postInfo.body}
        onChange = {e => setPostInfo({...postInfo, body: e.target.value})}
      />

    <MyButton onClick = {addSetPost} >Create post</MyButton>

    </form>
    
  );
};

export default PostForm