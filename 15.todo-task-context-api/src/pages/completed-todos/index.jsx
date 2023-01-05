import React, { useContext, useState } from "react";
import { todoContext } from "../../context/todoContext";

const CompletedTodos = () => {
  const { todos, setTodos } = useContext(todoContext);

  const clearTodos = () => {
    setTodos(todos.filter((todo) => todo.status !== true));
  };

  return (
    <>
      <h1 className="title">Completed Todos</h1>
      <div>
        {todos &&
          todos
            .filter((todo) => todo.status === true)
            .map((q, index) => {
              return <h1 key={index}>{q.content}</h1>;
            })}
      </div>
      <button onClick={() => clearTodos()}>Empty</button>
    </>
  );
};

export default CompletedTodos;
