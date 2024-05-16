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

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [displayModal, setdisplayModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [pageArray, setPageArray] = useState([])

  const sortAndFiltrPosts = usePosts(posts, searchQuery, sortBy)

  const [getPostsData, isLoading, err] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    let numberOfPages = Math.ceil(response.headers["x-total-count"] / limit) + 1
    let pageArr = []
    for (let i = 1; i<numberOfPages; i++) {
      pageArr.push(i)
    }
    setPageArray(pageArr)
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
        :
          <PostList
            removePost = {removePost}
            posts={sortAndFiltrPosts}
            title="Title"
          />
      }
      <div>
        <Mybutton onClick = {() => setPage(page - 1)} >&lt;</Mybutton>
        {pageArray.map(p =>
          <Mybutton 
            onClick = {() => setPage(p)} 
            key = {p}
          >{p}</Mybutton>
        )}
        <Mybutton onClick = {() => setPage(page + 1)} >&gt;</Mybutton>
      </div>
      <Mymodal displayModal = {displayModal} setdisplayModal = {setdisplayModal}>
        <PostForm create = {createNewPost}/>
      </Mymodal>

    </div>
  );
}

export default App;
