import React from "react";

const PostItem = (props) => {
  return (
  <div className="post">
    <div className="post__content">
      <h1>{props.post.title}</h1>
      <div>
        <p>{props.post.content}</p>
      </div>
    </div>
    <div className="post_del">
      <button>Удалить</button>
    </div>
  </div>
  );
};

export default PostItem;