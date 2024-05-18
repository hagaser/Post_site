import React from "react";
import "./CSS/App.css";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/UI/NavMenu/NavMenu";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavMenu/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
