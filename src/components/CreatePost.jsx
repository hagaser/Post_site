import React, { useState } from "react";
import Mybutton from "./UI/Mybutton/Mybutton";
import Myinput from "./UI/Myinput/Myinput";

const CreatePost = ({create}) => {

  const [post, setPost] = useState({title: '', content: ''})

  const addNewPost = (e) => {
    e.preventDefault();
  
    const newPost = {...post, id: Date.now()}
    create(newPost)
  
    setPost({title: '', content: ''})
  }
    
  return (
    <form className="createNewPost">

      <Myinput
        type = "text"
        placeholder = "Post name"
        value = {post.title}
        onChange = {e => setPost({...post, title: e.target.value})}
      />

      <Myinput
        type = "text"
        placeholder="Post content"
        value = {post.content}
        onChange = {e => setPost({...post, content: e.target.value})}
      />

    <Mybutton onClick = {addNewPost} >Create post</Mybutton>

    </form>
  );
};

export default CreatePost