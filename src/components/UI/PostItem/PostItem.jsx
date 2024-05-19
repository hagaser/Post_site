import React, { useRef } from "react";
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import classes from "./PostItem.module.css"

const PostItem = (props) => {

  const router = useNavigate();

  const postRef = useRef();

  const deletePost = () => {
    document.documentElement.style.setProperty(
      "--element-height",
      postRef.current.offsetHeight +
      "px"
    ); // creates a variable for CSS so that animations work correctly
    props.removePost(props.post);
  }

  return (

  <div className={classes.post} ref = {postRef}>

    <div className={classes.post__content}>
      <h1>{props.post.title}</h1>
      <div>
        <p>{props.post.body}</p>
      </div>
    </div>

    <div className={classes.post_del}>
      <MyButton onClick = {deletePost} >Удалить</MyButton>
      <MyButton onClick = {() => router(`/posts/${props.post.id}`)}>Открыть пост</MyButton>
    </div>
    
  </div>

  );
};

export default PostItem;