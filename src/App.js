import React, { useEffect, useState } from "react";

// styles //
import "./CSS/App.css";

// react-router-dom //
import { BrowserRouter } from "react-router-dom";

// components //
import NavMenu from "./components/UI/NavMenu/NavMenu";
import AppRouter from "./components/AppRouter";

// context //
import { AuthContext } from "./context";


function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect ( () => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setAuthLoading(false);
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
