import React, { useState } from "react";
import "./CSS/App.css";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "Это имя", content: "много текста"},
    {id: 2, title: "Это имя2", content: "много текста"},
    {id: 3, title: "Это имя1", content: "много текста"},
  ])

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">

      <CreatePost create = {createNewPost}/>

      <PostList posts={posts} title="Title name"/>

    </div>
  );
}

export default App;
