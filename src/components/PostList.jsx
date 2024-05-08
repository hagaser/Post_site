import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = (props) => {
  return (
    <div>
      { props.posts.length !== 0
        ? <h1 className="title">{props.title}</h1>
        : <h1 className="title">No Posts found</h1>
      }
      <TransitionGroup>
        {props.posts.map(post =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem removePost = {props.removePost} post={post} key={post.id}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList