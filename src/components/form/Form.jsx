
import "./Form.css";
const Form = ({todoTitle, setTodoTitle, todos, setTodos}) => {

  const handleChange = (ev) => setTodoTitle(ev.target.value);
  const addTodo = () => setTodos([...todos, {id: Date.now(),title: todoTitle, completed: false}]);
 
  const submitHandler = (e) => {
    e.preventDefault();
    if(!todoTitle)return alert("Please enter a todo")
    addTodo();
    setTodoTitle("");
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <input type="text" value={todoTitle} onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
