import React, {useState} from "react";

function App() {

  const [count, Change] = useState(0)

  const Increase = () =>{
    Change(count + 1)
  }

  const Decrease = () =>{
    Change(count - 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increase}>Увеличить</button>
      <button onClick={Decrease}>Уменьшить</button>
    </div>
  );
}

export default App;
