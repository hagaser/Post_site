import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

  const {isAuth, authLoading} = useContext(AuthContext)

  if (authLoading) {
    return <Loader/>
  }
  
  const privateRoutes = [
    {id: 1, path: "/about", element: <About/>, exact: false},
    {id: 2, path: "/posts", element: <Posts/>, exact: true},
    {id: 3, path: "*", element: <ErrorPage/>, exact: false},
    {id: 4, path: "/posts/:id", element: <PostPage/>, exact: true},
  ]

  const pablicRoutes = [
    {id: 5, path: "*", element: <Login/>, exact: false},
  ]

  return (
    isAuth
    ? <Routes>
        {privateRoutes.map(route => 
          <Route path = {route.path} key = {route.id} element = {route.element}/>
        )}
      </Routes>
    : <Routes>
        {pablicRoutes.map(route => 
          <Route path = {route.path} key = {route.id} element = {route.element}/>
        )}
      </Routes>
  );
};

export default AppRouter
