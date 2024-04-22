import Header from "./components/Header"
import AppInput from "./components/AppInput"
import TodoItems from "./components/TodoItems"
import './App.css'
import { useState } from "react"

function App() {

  const [todoItems, setTodoItems] = useState([]);
  

  const addItem = (task, date) => {
    if (task && date) {
      const newItem = {
        name: task,
        dueDate: date
      }
      const newItems = [...todoItems, newItem]
      setTodoItems(newItems)
    }
  }

  const deleteItem = (delItem) => {
    const newItems = todoItems.filter((item) => item.name !== delItem)
    setTodoItems(newItems)
  }
  
  return (
    <div className="d-flex align-items-center justify-content-center todo-container container">
      <center>
        <Header />
        <AppInput addItem={addItem} />
        <TodoItems todoItems={todoItems} deleteItem={deleteItem}></TodoItems>
      </center>
    </div>
  )
}

export default App
