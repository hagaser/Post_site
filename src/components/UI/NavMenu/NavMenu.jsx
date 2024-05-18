import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./NavMenu.module.css";
import { AuthContext } from "../../../context";
import Mybutton from "../Mybutton/Mybutton";

const NavMenu = () => {

  const {setIsAuth} = useContext(AuthContext)

  const links = [
    {id: 1, to: "/about", name: "About"},
    {id: 2, to: "/posts", name: "Posts"},
  ]

  const logaut = () => {
    setIsAuth(false)
    localStorage.removeItem("auth")
  }

  return (
    <div className = {classes.navmenu}>
      <div className = {classes.navmenu__links}>
        {links.map(link => 
          <Link to = {link.to} className = {classes.nav__link} key = {link.id}>{link.name}</Link>
        )}
        <Mybutton className = {classes.nav__link} onClick = { () => logaut()}>Logout</Mybutton>
      </div>
    </div>
  );
};

export default NavMenu