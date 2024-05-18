import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Filter from "./components/Filter";
import Mymodal from "./components/UI/Mymodal/Mymodal";
import Mybutton from "./components/UI/Mybutton/Mybutton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loadet";
import { useFetching } from "./hooks/useFatching";
import { getNumberOfPages } from "./utils/getNumberOfPages";
import { usePage } from "./hooks/usePage";
import { useSetPages } from "./hooks/useSetPages";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [displayModal, setdisplayModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(0)

  const sortAndFiltrPosts = usePosts(posts, searchQuery, sortBy)

  const pageArray = usePage(numberOfPages)

  const pages = useSetPages(pageArray, page, setPage)

  const [getPostsData, isLoading, err] = useFetching( async () => {
    const limit = 10;
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"];
    setNumberOfPages(getNumberOfPages(totalCount, limit))
  })

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect( () => {
    getPostsData()
  }, [page])

  return (
    <div className="App">

      <Mybutton onClick = {() => setdisplayModal(true)} >Create Post</Mybutton>

      <Filter 
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
        setSortBy = {setSortBy}
      />

      {err &&
        <h1>Error: {err}</h1>
      }

      {isLoading
        ? <Loader/>
        : <PostList
            removePost = {removePost}
            posts={sortAndFiltrPosts}
            title="Title"
          />
      }

      <Pagination
        page = {page}
        setPage = {setPage}
        pages = {pages}
        pageArray = {pageArray}
      />
      
      <Mymodal displayModal = {displayModal} setdisplayModal = {setdisplayModal}>
        <PostForm create = {createNewPost}/>
      </Mymodal>

    </div>
  );
}

export default App;
