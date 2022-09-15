import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import { useEffect } from 'react'
import axios  from "axios"

function App() {

  const [toDo, setToDo] = useState([])
  const [toDoSelected, setToDoSelected] = useState(null)

  useEffect(() => {
    axios.get("https://todo-app-academlo.herokuapp.com/todos/")
      .then(res => setToDo(res.data))
  }, [])

  const getToDo = () => {
    axios.get("https://todo-app-academlo.herokuapp.com/todos/")
      .then((res) => setToDo(res.data));
  };

  const addToDo = (newToDo) => {
    axios.post("https://todo-app-academlo.herokuapp.com/todos/", newToDo)
      .then(() => getToDo())
      .catch((error) => console.log(error.response));
  }

  const deleteToDo = (id) => {
    axios.post(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
    .then(() => getToDo())
  }

  const selectToDo = (toDo) => {
    setToDoSelected(toDo)
  }

  const updateToDo = (newToDo) => {
    axios.post(`https://todo-app-academlo.herokuapp.com/todos/${toDoSelected.id}/`, newToDo)
    .then(() => getToDo())
  }

  const deselectedToDo = () => {
    setToDoSelected(null)
  }

  return (
    <div className='content'>
      <div className="App">
        <ToDoForm
          addToDo={addToDo}
          updateToDo={updateToDo}
          toDoSelected={toDoSelected}
          deselectedToDo={deselectedToDo}
        />
        <ToDoList
          toDo={toDo}
          deleteToDo={deleteToDo}
          selectToDo={selectToDo}
        />
      </div>
    </div>
  )
}

export default App
