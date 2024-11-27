import React, { useEffect, useRef, useState } from "react";

// styles //
import "../CSS/App.css";

// components //
import PostList from "../components/UI/PostList/PostList";
import PostForm from "../components/PostForm";
import Filter from "../components/Filter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/MyButton/MyButton";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";

// API //
import PostService from "../API/PostService";

// utils //
import { getNumberOfPages } from "../utils/getNumberOfPages";

// custom hooks //
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { usePage } from "../hooks/usePage";
import { useSetPages } from "../hooks/useSetPages";
import { useObserver } from "../hooks/useObserver";
import ChooseDisplay from "../components/ChooseDisplay";


function Posts() {

  // useState
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [displayModal, setdisplayModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [displayMethod, setDisplayMethod] = useState("by buttons");

  // useRef
  const lastEllement = useRef();

  // castom hooks
  const sortAndFiltrPosts = usePosts(posts, searchQuery, sortBy);

  const pageArray = usePage(numberOfPages);

  const pages = useSetPages(pageArray, page, setPage);

  const [getPostsData, isPostsLoading, err] = useFetching( async () => {
    
    const response = await PostService.getAllPosts(limit, page);

    if (displayMethod === "by buttons") {
      if (observer) observer.disconnect();
      setPosts(response.data);
    }
    
    if (displayMethod === "endless feed") {
      setPosts([...posts, ...response.data]);
    }

    const totalCount = response.headers["x-total-count"];
    setNumberOfPages(getNumberOfPages(totalCount, limit));

    if (page > numberOfPages && numberOfPages) setPage(numberOfPages)
  });

  let run = false;
  if (displayMethod === "endless feed") run = true;
  if (displayMethod === "by buttons") run = false;

  const observer = (useObserver(
    run,
    isPostsLoading,
    lastEllement,
    page < numberOfPages, 
    () => {
      setPage(page + 1);
    }
  ));

  useEffect( () => {
    getPostsData();
  }, [page, limit, displayMethod, numberOfPages]);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">

      <MyButton onClick = {() => setdisplayModal(true)} >
        Create Post
      </MyButton>

      <Filter 
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
        setSortBy = {setSortBy}
      />

      <ChooseDisplay
        displayMethod = {displayMethod}
        setLimit = {setLimit}
        setDisplayMethod = {setDisplayMethod}
      />

      {err &&
        <h1>Error: {err}</h1>
      }

      {isPostsLoading &&
        <Loader/>
      }

      <PostList
        isPostsLoading = {isPostsLoading}
        removePost = {removePost}
        posts={sortAndFiltrPosts}
        title="Title"
      />
      <div ref={lastEllement}/>

      {displayMethod === "by buttons" &&
        <Pagination
          page = {page}
          setPage = {setPage}
          pages = {pages}
          pageArray = {pageArray}
        />
      }
      
      <MyModal
        displayModal = {displayModal}
        setdisplayModal = {setdisplayModal}
      >
        <PostForm create = {createNewPost}/>
      </MyModal>

    </div>
  );
}

export default Posts;
