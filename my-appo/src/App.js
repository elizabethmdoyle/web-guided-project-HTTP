import React, {useState, useEffect} from 'react';
import './App.css';

import { getTodos } from './actions/todos';

const todos = [
  {
    id: 1,
    description: "say hello",
    isDone: true
  },
   {
    id: 2,
    description: "say hello again",
    isDone: false
  }
]

function App() {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    getTodos().then(res => {console.log('this is going to be the result'); console.log(res)})
  }, [])


  return (
    <div className="App">
     <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
     />
     <button>Submit</button>
     {todos.map((todo, index) => {
       return <div key={index}>
         <span className={todo.isDone ? 'done' : ''}>{todo.description}</span>
         <span>
          <button>{todo.isDone ? "Delete" : "Completed"}</button>
         </span>
         </div>
      })}
    </div>
  );
}

export default App;
