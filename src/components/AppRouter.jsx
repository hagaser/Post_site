import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  
  const routes = [
    {id: 1, path: "/about", element: <About/>},
    {id: 2, path: "/posts", element: <Posts/>},
    {id: 3, path: "*", element: <ErrorPage/>},
  ]

  return (
    <Routes>
      {routes.map(route => 
        <Route path = {route.path} key = {route.id} element = {route.element}/>
      )}
    </Routes>
  );
};

export default AppRouter
