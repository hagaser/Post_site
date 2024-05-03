import React, { useMemo, useState } from "react";
import "./CSS/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Myselect from "./components/UI/Myselect/Myselect";
import Myinput from "./components/UI/Myinput/Myinput";

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSort, setselectedSort] = useState('')

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

  function sortPosts() {
    console.log(selectedSort)
    if(selectedSort) return [...posts].sort((fe, se) => fe[selectedSort].localeCompare(se[selectedSort]))
    return posts
  }

  return (
    <div className="App">

      <PostForm create = {createNewPost}/>
      <div>
        <Myinput
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
          placeholder = "search..."
        />
        <Myselect
          value = {selectedSort}
          onChange = {sort => setselectedSort(sort)}
          defaultValue = "Sort By"
          options = {[
            {value: "title", name: "Title"},
            {value: "content", name: "Content"},
          ]}
        />
      </div>
      <PostList removePost = {removePost} posts={sortPosts()} title="Title name"/>

    </div>
  );
}

export default App;
