import './App.css';
import { useState, useEffect } from 'react'
import { getTodos, postTodo, putTodo, deleteTodo } from './actions/todos'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const getData = () => {
    getTodos().then(setTodos)
  }
  const addTodo = () => {
    postTodo(todo).then(getData)
  }
  const completeTodo = todo => {
    putTodo({ ...todo, isDone: true }).then(getData)
  }
  const removeTodo = id => {
    deleteTodo(id).then(getData)
  }
  useEffect(() => { getData() }, [])

  return (
    <div className="App">
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={e => addTodo()}>submit</button>
      {todos.map((td, index) => (
        <div key={index}>
          <span className={td.isDone ? 'done' : ''}>{td.description}</span>
          <span>
            <button onClick={e => completeTodo(td)}>Complete</button>
            <button onClick={e => removeTodo(td.id)}>Delete</button></span>
        </div>
      ))}
    </div>
  );
}

export default App;