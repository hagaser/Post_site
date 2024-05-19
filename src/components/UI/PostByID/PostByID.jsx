import React from "react";
import classes from "./PostByID.module.css";

const PostByID = (props) => {
  return (

    <div className = {classes.post__div}>

      <div className = {classes.post__head}>
        <h1>{props.post.title}</h1>
      </div>

      <div className = {classes.post__body}>
        <p>{props.post.body}</p>
      </div>

    </div>

  );
};

export default PostByID