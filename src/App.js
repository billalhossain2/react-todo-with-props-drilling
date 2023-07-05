import Todos from "./components/todos/Todos";
import Form from "./components/form/Form";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      todos={todos}
      setTodos={setTodos}
      ></Form>
      <Todos
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      todos={todos}
      setTodos={setTodos}
      ></Todos>
    </div>
  );
}

export default App;
