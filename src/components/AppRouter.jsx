import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
  
  const routes = [
    {id: 1, path: "/about", element: <About/>},
    {id: 3, path: "*", element: <ErrorPage/>},
  ]

  return (
    <Routes>
      {routes.map(route => 
        <Route path = {route.path} key = {route.id} element = {route.element}/>
      )}
      <Route exact path = "/posts" key = {2} element = {<Posts/>}/>
      <Route exact path = "/posts/:id" key = {4} element = {<PostPage/>}/>
    </Routes>
  );
};

export default AppRouter
