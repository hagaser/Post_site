import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavMenu.module.css";

const NavMenu = () => {

  const links = [
    {id: 1, to: "/about", name: "About"},
    {id: 2, to: "/posts", name: "Posts"},
  ]

  return (
    <div className = {classes.navmenu}>
      <div className = {classes.navmenu__links}>
        {links.map(link => 
          <Link to = {link.to} className = {classes.nav__link} key = {link.id}>{link.name}</Link>
        )}
      </div>
    </div>
  );
};

export default NavMenu