import React from "react";
import classes from "./Pagination.module.css";
import MyButton from "../MyButton/MyButton";

const Pagination = (props) => {
  return (

    <div className={classes.page__wraper}>

      {props.page > 1 // if current page is first
        ? <MyButton onClick = {() => props.setPage(props.page - 1)} >&lt;</MyButton> // "&lt;" = "<"
        : null
      }

      {props.pages}

      {props.page == props.pageArray.length // if current page is last
        ? null
        : <MyButton onClick = {() => props.setPage(props.page + 1)} >&gt;</MyButton> // "&lt;" = ">"
      }

    </div>

  );
};

export default Pagination