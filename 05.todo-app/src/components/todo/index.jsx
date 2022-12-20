import React, { useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { uid } from "uid";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, { todoId: uid(12), todoText: inputValue }]);
      setInputValue("");
    } else {
      setErrorStatus(true);
    }
  };
  const handleDelete = (e) => {
    console.log(e.target.id);
    let updatedTodos = todos.filter((todo) => todo.todoId !== e.target.id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Container className="mt-4 text-primary">
        <h1>TODO APP</h1>
        <Row className="my-4">
          <Col xs={2}></Col>
          <Col xs={7}>
            <Form.Control
              onChange={(e) => {
                setInputValue(e.target.value);
                setErrorStatus(false);
              }}
              value={inputValue}
              placeholder="add todos here.."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className={errorStatus && "border border-danger"}
            />

            {errorStatus && (
              <p className="error-message text-danger">
                Input can not be empty!!
              </p>
            )}
          </Col>
          <Col xs={1}>
            <Button variant="primary" onClick={() => handleAddTodo()}>
              Add
            </Button>
          </Col>
          <Col xs={2}></Col>
        </Row>

        {todos.map((element) => {
          return (
            <ListGroup key={element.todoId} className="mb-3">
              <Row className="d-flex justify-content-center">
                <Col xs={8}>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <p className="m-0">{element.todoText}</p>
                    <Button
                      id={element.todoId}
                      variant="danger"
                      onClick={(e) => handleDelete(e)}
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                </Col>
              </Row>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
};

export default TodoApp;
