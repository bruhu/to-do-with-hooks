import React, { useState } from "react";
import "./App.css";

//another component!
//we will pass here the props written below - using destructure
function Todo({ todo, index, completeTodo, removeTodo }) {
  // style will add crossed text to a done task if it is completed
  return (
    <div className="todo-container col-">
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo-text "
    >
      {todo.text}
      <div className="buttons col-8">
        <button onClick={() => completeTodo(index)} className="btn btn-outline-success" >Complete</button>
        <button onClick={() => removeTodo(index)} className="btn btn-outline-danger">x</button>
      </div>
    </div>
    </div>
  );
}

//third functional component we create, will contain the form
function TodoForm({ addTodo }) {
  // this form will have a state to it, so we use the hook again
  // value  for the state, setValue for the method that updates the state - useState empty by default
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // prevent to submit with an empty value:
    if (!value) return;
    addTodo(value);
    // to clear the form out:
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* in setValue we want to send whatever is in that input */}
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add something to do"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

//this will be the main component
function App() {
  //our state - with 2 variables (also deconstructing):
  //setTodos will be the method to update the state
  //initial data will go between brackets of useState
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build to-do app ",
      isCompleted: false
    }
  ]);

  const addToDo = text => {
    // we take the array of todos (whole thing w/spread operator) and add text
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    // splice single (1) todos by index
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h4>Tell me what to do!</h4>
      <div className="todo-list">
        {/* map through the todos in our state */}
        {/* todos comes from the destructuring above - todo will be each todo and representing each iteration */}
        {/* so for each todo we want to output a todo component */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addToDo} />
      </div>
    </div>
  );
}

export default App;
