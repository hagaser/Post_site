import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/UI/NavMenu/NavMenu";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [authLoading, setauthLoading] = useState(true);

  useEffect ( () => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setauthLoading(false);
  })

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      authLoading
    }}>
      <BrowserRouter>
        <NavMenu/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
