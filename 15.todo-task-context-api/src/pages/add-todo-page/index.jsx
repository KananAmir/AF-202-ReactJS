import React, { useContext, useState } from "react";
import { Input, Button } from "antd";
import { todoContext } from "../../context/todoContext";
import "./index.scss";

const AddTodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos, setTodos } = useContext(todoContext);

  const handleSubmit = () => {
    if (inputValue) {
      setTodos([...todos, { content: inputValue, status: false }]);
      setInputValue("");
    } else window.alert("Enter your todo!!");
  };

  return (
    <div id="add-todo-page">
      <h1 className="title">Add Todo Page</h1>
      <Input
        placeholder="add your todo.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <Button type="primary" onClick={() => handleSubmit()}>
        Add
      </Button>
    </div>
  );
};

export default AddTodoPage;
