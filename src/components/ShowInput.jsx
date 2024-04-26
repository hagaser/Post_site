import React, {useState} from "react";

const ShowInput = () => {

  const [input_value, Change_Value] = useState('Текст');

  const NumberCheck = (value) =>{
    if ((!isNaN(value)) && 
        (value)) return 0;
    else return value;
    }

  return (
    <div>
      <h1>{input_value}</h1>
      <input
        type="text"
        value={input_value}
        onChange={event => {Change_Value(NumberCheck(event.target.value))}}
      />
    </div>
  );
};

export default ShowInput;