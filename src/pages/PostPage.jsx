import React, { useEffect, useState } from "react";

// react-router-dom //
import { useParams } from "react-router-dom";

// castom hook //
import { useFetching } from "../hooks/useFetching";

// API //
import PostService from "../API/PostService";

// components //
import Loader from "../components/UI/Loader/Loader";
import CommentList from "../components/UI/CommentList/CommentList";
import PostByID from "../components/UI/PostByID/PostByID";


const PostPage = () => {

  // useState //
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  const params = useParams();

  const [getPost, isLoading, err] = useFetching ( async () => {
    const response = await PostService.getPostByID(params.id); // get current post
    setPost(response.data);
  })

  const [getComments, isCommentsLoading, comentErr] = useFetching ( async () => {
    const response = await PostService.getCommentsByID(params.id); // get current post comments
    setComments(response.data);
  })

  useEffect ( () => {
    getPost();
    getComments();
  }, [])

  return (
    <div>

      {err &&
        <h1>Error: {err}</h1>
      }

      {isLoading
        ? <Loader/>
        : <PostByID
            post = {post}
          />
      }

      {comentErr &&
        <h1>Error: {err}</h1>
      }

      {isCommentsLoading
        ? <Loader/>
        : <CommentList
            comments = {comments}
          />
      }
      
    </div>
  );
};

export default PostPage