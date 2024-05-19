import React, { useState } from "react";
import classes from "./MySelect.module.css";

const MySelect = (props) => {

  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  const setOption = (e) => { // change the value of the option and pass it to the parent element
    const val = e.target.value;
    setSelectedOption(val);
    props.onChange(val);
  }

  return (

    <div>
      <select 
        value={selectedOption}
        className={classes.mySelect}
        onChange={setOption}
      >

        {props.defaultValue
          ? <option disabled>{props.defaultValue}</option>
          : null
        }

        {props.options.map(option =>
          <option 
            value = {option.value}
            key = {option.value}
          >
            {option.name}
          </option> 
        )}
        
      </select>
    </div>

  );
};

export default MySelect