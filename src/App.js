import React from "react";
import "./CSS/App.css";

function App() {

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <h1>Имя поста</h1>
          <div>
            <p>Описание поста</p>
          </div>
        </div>
        <div className="post_del">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
