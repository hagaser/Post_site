import React from "react";
import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (

    <div className = {classes.comment}>
      <p>{props.comment.email}</p>
      <p>{props.comment.body}</p>
    </div>
    
  );
};

export default CommentItem