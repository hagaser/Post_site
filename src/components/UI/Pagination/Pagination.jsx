import React from "react";
import classes from './Pagination.module.css';
import Mybutton from "../Mybutton/Mybutton";

const Pagination = (props) => {
  return (
    <div className={classes.page__wraper}>
      {props.page > 1
        ? <Mybutton onClick = {() => props.setPage(props.page - 1)} >&lt;</Mybutton>
        : null
      }
      {props.pages}
      {props.page == props.pageArray.length
        ? null
        : <Mybutton onClick = {() => props.setPage(props.page + 1)} >&gt;</Mybutton>
      }
    </div>
  );
};

export default Pagination