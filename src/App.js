import Todos from "./components/todos/Todos";
import Form from "./components/form/Form";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState(null);
  return (
    <div className="App">
      <Form
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      todos={todos}
      setTodos={setTodos}
      editableTodo={editableTodo}
      setEditableTodo={setEditableTodo}
      ></Form>
      <Todos
      todoTitle={todoTitle}
      setTodoTitle={setTodoTitle}
      todos={todos}
      setTodos={setTodos}
      editableTodo={editableTodo}
      setEditableTodo={setEditableTodo}
      ></Todos>
    </div>
  );
}

export default App;
