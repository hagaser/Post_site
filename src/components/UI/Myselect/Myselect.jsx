import React, { useState } from "react";
import classes from './Myselect.module.css';

const Myselect = (props) => {

  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  const sortPost = (e) => {
    let val = e.target.value;
    setSelectedOption(val);
    props.onChange(val);
  }

  return (
    <div>
      <select value={selectedOption} className={classes.mySelect} onChange={sortPost}>
        { props.defaultValue
          ? <option disabled>{props.defaultValue}</option>
          : null
        }
        {props.options.map(option =>
          <option value = {option.value} key = {option.value}>{option.name}</option> 
        )}
      </select>
    </div>
  );
};

export default Myselect