import React, {useState} from "react";

function App() {

  const [count, Change] = useState(0);
  const [input_value, Change_Value] = useState('Текст');

  const Increase = () =>{
    Change(count + 1);
  }

  const Decrease = () =>{
    Change(count - 1);
  }

  const NumberCheck = (value) =>{
    if (!isNaN(value) && (value)) {
      return 0
    }
    else return value
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{input_value}</h1>
      <input
        type="text"
        value={input_value}
        onChange={event => {Change_Value(NumberCheck(event.target.value))}}
      />
      <button onClick={Increase}>Увеличить</button>
      <button onClick={Decrease}>Уменьшить</button>
    </div>
  );
}

export default App;
