import React, { useRef } from "react";
import Mybutton from "./UI/Mybutton/Mybutton";

const PostItem = (props) => {

  const postRef = useRef();

  const deletePost = () => {
    document.documentElement.style.setProperty('--element-height', postRef.current.offsetHeight + 'px');
    props.removePost(props.post)
  }

  return (
  <div className="post" ref = {postRef}>
    <div className="post__content">
      <h1>{props.post.title}</h1>
      <div>
        <p>{props.post.content}</p>
      </div>
    </div>
    <div className="post_del">
      <Mybutton onClick = {deletePost} >Удалить</Mybutton>
    </div>
  </div>
  );
};

export default PostItem;