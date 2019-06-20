import React, { useState } from "react";
import "./App.css"

//another component!
//we will pass here the props written below - using destructure
function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}

//third functional component we create, will contain the form
function TodoForm({addTodo}){
  // this form will have a state to it, so we use the hook again
  // value  for the state, setValue for the method that updates the state - useState empty by default
const [value, setValue] = useState("");

const handleSubmit = e => {
  e.preventDefault();
  // prevent to submit with an empty value:
  
}
return(
  <form onSubmit={handleSubmit}>
    {/* in setValue we want to send whatever is in that input */}
<input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
  </form>
)
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

  return (
    <div className="app">
      <h4>Tell me what to do!</h4>
      <div className="todo-list">
        {/* map through the todos in our state */}
        {/* todos comes from the destructuring above - todo will be each todo and representing each iteration */}
        {/* so for each todo we want to output a todo component */}
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
