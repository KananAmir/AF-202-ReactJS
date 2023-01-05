import React, { useContext } from "react";
import { todoContext } from "../../context/todoContext";
import { Checkbox } from "antd";
import "./index.scss";

const TodoPage = () => {
  let { todos, setTodos } = useContext(todoContext);

  const onChange = (e, index) => {
    // console.log(e.target.checked);
    let completed = [...todos];
    completed[index].status = e.target.checked;
    console.log(e.target.checked);
    setTodos(completed);
  };

  return (
    <div id="todo-page">
      <h1 className="title">All Todos</h1>
      <ul>
        {todos &&
          todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.content}
                <Checkbox
                  checked={todo.status}
                  onChange={(e) => onChange(e, index)}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoPage;
