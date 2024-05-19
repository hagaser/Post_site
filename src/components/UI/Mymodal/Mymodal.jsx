import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({children, displayModal, setdisplayModal}) => {

  const rootClasses = [classes.myModal];

  if (displayModal) rootClasses.push(classes.active); // makes the element visible

  return (

    <div 
      className = {rootClasses.join(" ")}
      onClick={() => setdisplayModal(false)}
    >
      {/* "stopPropagation()" it does not allow hide an element when clicking on the form */}
      <div 
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>

  );
};

export default MyModal