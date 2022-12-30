import React, { useState } from "react";
import { uid } from "uid";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: uid(), todoText: inputValue }]);
          setInputValue("");
        }}
      >
        Add
      </button>

      <hr />

      {todos.map((q) => {
        return (
          <p
            key={q.id}
            onClick={() => {
              setTodos([...todos.filter((todo) => todo.id != q.id)]);
            }}
          >
            {q.todoText}
          </p>
        );
      })}
    </div>
  );
};

export default TodoApp;
