import React, { useContext } from "react";

// react-router-dom //
import { Routes, Route } from "react-router-dom";

// pages //
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";

// context //
import { AuthContext } from "../context";

// components //
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

  const {isAuth, authLoading} = useContext(AuthContext); // get "isAuth" and "authLoading" from context

  if (authLoading) {
    return <Loader/>;
  };
  
  const privateRoutes = [
    {id: 1, path: "/about", element: <About/>},
    {id: 2, path: "/posts", element: <Posts/>},
    {id: 3, path: "*", element: <ErrorPage/>},
    {id: 4, path: "/posts/:id", element: <PostPage/>},
  ];

  const pablicRoutes = [
    {id: 5, path: "*", element: <Login/>},
  ];

  return (

    isAuth
    ? <Routes>
        {privateRoutes.map(route => 
          <Route
            path = {route.path}
            key = {route.id}
            element = {route.element}
          />
        )}
      </Routes>

    : <Routes>
        {pablicRoutes.map(route => 
          <Route
            path = {route.path}
            key = {route.id}
            element = {route.element}
          />
        )}
      </Routes>

  );
};

export default AppRouter
