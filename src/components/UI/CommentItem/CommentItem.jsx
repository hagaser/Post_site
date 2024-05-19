import React from "react";
import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (

    <div className = {classes.comment}>
      <h4>{props.comment.email}</h4>
      <p>{props.comment.body}</p>
    </div>
    
  );
};

export default CommentItem