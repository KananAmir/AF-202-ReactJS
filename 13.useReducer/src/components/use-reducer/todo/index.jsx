import React, { useReducer, useState } from "react";
import { uid } from "uid";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return { ...state, inputValue: action.payload };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        inputValue: "",
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((q) => q.id !== action.payload)],
      };

    default:
      return state;
  }
};

const TodoAppWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    inputValue: "",
  });

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        onChange={(e) =>
          dispatch({ type: "SET_TODO", payload: e.target.value })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: { id: uid(), todoText: state.inputValue },
          })
        }
      >
        Add
      </button>

      <hr />

      {state.todos?.map((todo) => {
        return (
          <p
            key={todo.id}
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            {todo.todoText}
          </p>
        );
      })}
    </div>
  );
};

export default TodoAppWithUseReducer;
