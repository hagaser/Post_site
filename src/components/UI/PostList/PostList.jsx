import React, { memo } from "react";
import PostItem from "../PostItem/PostItem";
import classes from "./PostList.module.css"
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = memo((props) => {
  return (

    <div>

      { props.posts.length !== 0 || props.isPostsLoading
        ? <h1 className={classes.title}>{props.title}</h1>
        : <h1 className={classes.title}>No Posts found</h1>
      }

      <TransitionGroup>
        {props.posts.map(post =>
          <CSSTransition
            key={post.id}
            timeout={1000}
            classNames={{
              enter: classes.post__enter,
              enterActive: classes.post__enter__active,
              exit: classes.post__exit,
              exitActive: classes.post__exit__active,
            }}
          >
            <PostItem
              removePost = {props.removePost}
              post={post}
              key={post.id}
            />
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>

  );
});

export default PostList