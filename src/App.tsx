import React from 'react';
import './App.css';
import { Todo } from "./todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className={"App-main"}>
        <h3>
          Task List
        </h3>
        <Todo />
      </main>
    </div>
  );
}

export default App;
