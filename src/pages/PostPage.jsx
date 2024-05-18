import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFatching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loadet";
import CommentList from "../components/UI/CommentList/CommentList";
import PostByID from "../components/UI/PostByID/PostByID";

const PostPage = () => {

  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])

  const params = useParams()

  const [getPost, isLoading, err] = useFetching ( async () => {
    const response = await PostService.getByID(params.id)
    setPost(response.data)
  })

  const [getComments, isCommentsLoading, comentErr] = useFetching ( async () => {
    const response = await PostService.getCommentsByID(params.id)
    setComments(response.data)
  })

  useEffect ( () => {
    getPost()
    getComments()
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