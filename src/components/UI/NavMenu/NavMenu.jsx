import React, { useContext } from "react";

// classes //
import classes from "./NavMenu.module.css";

// react-router-dom //
import { Link } from "react-router-dom";

// context //
import { AuthContext } from "../../../context";

// components //
import MyButton from "../MyButton/MyButton";


const NavMenu = () => {

  const {setIsAuth} = useContext(AuthContext); // get func "setIsAuth" from context

  const links = [
    {id: 1, to: "/about", name: "About"},
    {id: 2, to: "/posts", name: "Posts"},
  ];

  const logaut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth"); // delete "Auth" state from localStorage
  }

  return (

    <div className = {classes.navmenu}>

        {links.map(link => 
          <Link
            to = {link.to} 
            className = {classes.nav__link}
            key = {link.id}
          >
            {link.name}
          </Link>
        )}

        <MyButton 
          className = {classes.nav__link} 
          onClick = { () => logaut()}
        >
          Logout
        </MyButton>

    </div>

  );
};

export default NavMenu