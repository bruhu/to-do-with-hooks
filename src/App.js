import React, {useState} from "react"

//this will be the main component
function App(){
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
])

return(
  <div className="app">
     Oh, hi. I am the app div.
    <div className="todo-list">
{/* map through the todos in our state */}
{/* todos comes from the destructuring above - todo will be each todo and representing each iteration */}
{/* so for each todo we want to output a todo component */}
{todos.map(todo, index) => (

)}

    </div>

  </div>
)
}

export default App; 