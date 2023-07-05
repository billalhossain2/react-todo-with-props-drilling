import React from 'react'
import "./Todos.css";
import Todo from '../todo/Todo';
const Todos = ({todoTitle, setTodoTitle, todos, setTodos, editableTodo, setEditableTodo}) => {
  return (
    <div>
      {
        todos.map(todo => <Todo key={todo.id} todo={todo} todoTitle={todoTitle} setTodoTitle={setTodoTitle} todos={todos} setTodos={setTodos} editableTodo={editableTodo} setEditableTodo={setEditableTodo}></Todo>)
      }
    </div>
  )
}

export default Todos