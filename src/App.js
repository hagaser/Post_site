import React, { useState } from "react";
import "./CSS/App.css";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/Mybutton/Mybutton";

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: "Это имя", content: "много текста"},
    {id: 2, title: "Это имя2", content: "много текста"},
    {id: 3, title: "Это имя1", content: "много текста"},
  ])

  return (
    <div className="App">
      <form>
        <input type = "text" placeholder="Post name" />
        <input type = "text" placeholder="Post content" />
        <Mybutton>Create post</Mybutton>
      </form>
      <PostList posts={posts} title="Title name"/>
    </div>
  );
}

export default App;
