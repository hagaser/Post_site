import React from "react";
import classes from './Error.module.css';

const Error = () => {
  return (
    <div className = {classes.error}>
      <h1>Error 404 page no found</h1>
    </div>
  );
};

export default Error