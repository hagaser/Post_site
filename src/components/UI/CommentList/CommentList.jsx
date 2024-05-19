import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import classes from "./CommentList.module.css";


const CommentList = (props) => {
  return (

    <div className = {classes.comment__list}>
      <h1>Comments:</h1>
      
      {props.comments.map(comment =>
        <CommentItem
            comment = {comment}
            key = {comment.id}
        />
      )}
      
    </div>

  );
};

export default CommentList