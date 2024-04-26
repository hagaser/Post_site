import React, {useState} from "react";

const Counter = () => {

  const [count, Change] = useState(0);

  const Increase = () =>{
    Change(count + 1);
  }

  const Decrease = () =>{
    Change(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increase}>Увеличить</button>
      <button onClick={Decrease}>Уменьшить</button>
    </div>
  );
};

export default Counter;