import React, { useEffect, useRef, useState } from "react";
import "../CSS/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Filter from "../components/Filter";
import Mymodal from "../components/UI/Mymodal/Mymodal";
import Mybutton from "../components/UI/Mybutton/Mybutton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFatching";
import { getNumberOfPages } from "../utils/getNumberOfPages";
import { usePage } from "../hooks/usePage";
import { useSetPages } from "../hooks/useSetPages";
import Pagination from "../components/UI/Pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import Myselect from "../components/UI/Myselect/Myselect";

function Posts() {

  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [displayModal, setdisplayModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [displayMethod, setDisplayMethod] = useState("by buttons")

  const lastEllement = useRef()

  const sortAndFiltrPosts = usePosts(posts, searchQuery, sortBy)

  const pageArray = usePage(numberOfPages)

  const pages = useSetPages(pageArray, page, setPage)

  const [getPostsData, isPostsLoading, err] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);

    if (displayMethod == "by buttons") {
      setPosts(response.data)
    }
    
    if (displayMethod == "endless feed") {
      setPosts([...posts, ...response.data])
    }

    const totalCount = response.headers["x-total-count"];
    setNumberOfPages(getNumberOfPages(totalCount, limit))
  })

  let run = false;
  if (displayMethod == "endless feed") run = true;

  useObserver(run, isPostsLoading, lastEllement, page < numberOfPages, () => {
    setPage(page + 1);
  })

  useEffect( () => {
    getPostsData()
  }, [page, limit])

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <Mybutton onClick = {() => setdisplayModal(true)} >Create Post</Mybutton>

      <Filter 
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
        setSortBy = {setSortBy}
      />
      {displayMethod == "by buttons" &&
        <Myselect
          value = {limit}
          onChange = {value => setLimit(value)}
          defaultValue = "Number of ellements on page"
          options = {[
            {value: 5, name: "5"},
            {value: 10, name: "10"},
            {value: 25, name: "25"},
            {value: -1, name: "Show all"},
          ]}
        />
      }

      <Myselect
        value = {displayMethod}
        onChange = {value => setDisplayMethod(value)}
        defaultValue = "Display method"
        options = {[
          {value: "endless feed", name: "Endless feed"},
          {value: "by buttons", name: "By buttons"},
        ]}
      />

      {err &&
        <h1>Error: {err}</h1>
      }

      {isPostsLoading &&
        <Loader/>
      }

      <PostList
        removePost = {removePost}
        posts={sortAndFiltrPosts}
        title="Title"
      />
      <div ref={lastEllement}/>

      {displayMethod == 'by buttons' &&
        <Pagination
          page = {page}
          setPage = {setPage}
          pages = {pages}
          pageArray = {pageArray}
        />
      }
      
      <Mymodal displayModal = {displayModal} setdisplayModal = {setdisplayModal}>
        <PostForm create = {createNewPost}/>
      </Mymodal>

    </div>
  );
}

export default Posts;
