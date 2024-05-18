import React, { useContext } from "react";
import Mybutton from "../components/UI/Mybutton/Mybutton";
import { AuthContext } from "../context";

const Login = () => {

  const {setIsAuth} = useContext(AuthContext)

  const login = () => {
    setIsAuth(true);
    localStorage.setItem("auth", "true")
  }

  return (
    <div>
      <Mybutton onClick = {() => login()} >Login</Mybutton>
    </div>
  );
};

export default Login