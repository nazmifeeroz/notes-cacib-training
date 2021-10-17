import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputValue === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function onEnterPress(e) {
    if (inputValue === "") return;
    if (e.key === "Enter") addTodo();
  }

  function handleDelete(i) {
    const updatedTodos = todos.filter((t) => t !== todos[i]);
    setTodos(updatedTodos);
  }

  function handleCompleted(i) {
    setCompleted([...completed, todos[i]]);
    handleDelete(i);
  }

  function toggleCompletedTaskes() {
    setShowCompleted(!showCompleted);
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
        <div
          className="btn btn-add"
          data-disabled={!inputValue}
          onClick={addTodo}
        >
          +
        </div>
        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={`${todo}-${i}`}>
              <input
                class="todo-checkbox"
                type="checkbox"
                onChange={() => handleCompleted(i)}
              />
              <span className="todo-text">{todo}</span>
              <span className="delete" onClick={() => handleDelete(i)} />
            </li>
          ))}
        </ul>
        {showCompleted && (
          <div>
            Completed Tasks: %
            <ul className="todo-list">
              {completed.map((complete, i) => (
                <li key={`${complete}-${i}`}>
                  <input class="todo-checkbox" type="checkbox" checked />
                  <span className="todo-text strikeoff">{complete}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {completed.length > 0 && (
          <div className="control-buttons">
            <div className="btn btn-secondary" onClick={toggleCompletedTaskes}>
              {showCompleted ? "Hide " : "Show "}
              Completed
            </div>
          </div>
        )}
      </section>
      <footer>
        Built with &hearts; by{" "}
        <a href="https://www.github.com/nazmifeeroz">Nazmi Feeroz</a>
        <br />
        View on{" "}
        <a href="https://github.com/nazmifeeroz/notes-cacib-training/tree/master/web-frameworks/react/react-todo-app">
          Github
        </a>
      </footer>
    </main>
  );
}

export default App;
