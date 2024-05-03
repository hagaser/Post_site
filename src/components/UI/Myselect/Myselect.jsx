import React from "react";
import classes from './Myselect.module.css';

const Myselect = (props) => {

  return (
    <div>
      <select value = {props.value} className = {classes.mySelect} onChange = {e => props.onChange(e.target.value)}>
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