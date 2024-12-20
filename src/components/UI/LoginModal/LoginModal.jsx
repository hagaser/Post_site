import React, { useContext } from "react";

// classes //
import classes from "./LoginModal.module.css";

// Components //
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";

// Context //
import { AuthContext } from "../../../context";


const LoginModal = () => {

  const {setIsAuth} = useContext(AuthContext); // take "setIsAuth" from context

  const login = () => {
    setIsAuth(true);
    localStorage.setItem("auth", "true"); // save "isAuth" state in localStorage
  }

  return (

    <div className = {classes.login}>
      <p className = {classes.p}>Login:</p>
      <MyInput></MyInput>
      <p className = {classes.p}>Password:</p>
      <MyInput></MyInput>
      <MyButton onClick = {() => login()} >Login</MyButton>
    </div>

  );
};

export default LoginModal