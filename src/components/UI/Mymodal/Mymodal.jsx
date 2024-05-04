import React from "react";
import classes from './Mymodal.module.css';

const Mymodal = ({children, displayModal, setdisplayModal}) => {

  const rootClasses = [classes.myModal]

  if (displayModal) rootClasses.push(classes.active)

  return (
    <div className = {rootClasses.join(' ')} onClick={() => setdisplayModal(false)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Mymodal