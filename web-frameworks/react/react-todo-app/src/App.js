import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function onEnterPress(e) {
    if (e.key === "Enter") addTodo();
  }

  return (
    <main>
      <section className="todo-wrapper">
        <h2 className="todo-title">My Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onEnterPress}
        />
        <div className="btn btn-add" onClick={addTodo}>
          +
        </div>
        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={`${todo}-${i}`}>{todo}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
