import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
  return (
    <div>
      { props.posts.length !== 0
        ? <h1 className="title">{props.title}</h1>
        : <h1 className="title">No Posts found</h1>
      }
      {props.posts.map(post =>
        <PostItem removePost = {props.removePost} post={post} key={post.id}/>  
      )}
    </div>
  );
};

export default PostList