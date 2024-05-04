import React, { useState } from "react";
import "./CSS/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Filter from "./components/Filter";
import Mymodal from "./components/UI/Mymodal/Mymodal";
import Mybutton from "./components/UI/Mybutton/Mybutton";

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [displayModal, setdisplayModal] = useState(false)

  const [posts, setPosts] = useState([
    {id: 1, title: "cЭто имя", content: "aмного текста"},
    {id: 2, title: "bЭто имя2", content: "bмного текста"},
    {id: 3, title: "aЭто имя1", content: "cмного текста"},
  ])

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sortByThis) => {
    setSortBy(sortByThis)
    setPosts([...posts].sort((fe, se) =>
      fe[sortByThis].localeCompare(se[sortByThis])))
  }

  const sortAndFiltrPosts = () => {
    if (searchQuery && sortBy) return posts.filter(p =>
      p[sortBy].toLowerCase().includes(searchQuery.toLowerCase()))

    return posts
  }

  return (
    <div className="App">
      <Mybutton onClick = {() => setdisplayModal(true)} >Create Post</Mybutton>
      <Filter 
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
        sortPost = {sortPost}
      />
      <PostList
        removePost = {removePost}
        posts={sortAndFiltrPosts()}
        title="Title name"
      />
      <Mymodal displayModal = {displayModal} setdisplayModal = {setdisplayModal}>
        <PostForm create = {createNewPost}/>
      </Mymodal>

    </div>
  );
}

export default App;
