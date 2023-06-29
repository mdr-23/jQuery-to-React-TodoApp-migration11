import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [inputValue, setInputValue] = useState([])
  const [tasks, setTasks] = useState([])

  console.log(inputValue)

  const addTask = (event) => {
    const newTask = {
      id: uuidv4(),
      name: inputValue
    }
    if(event.keyCode === 13){
      if(inputValue !== ""){
        setTasks([...tasks, newTask])
        setInputValue("")
      }
    }
  }

  console.log(tasks[2])

  const deleteTask = (itemID) => {
    setTasks(tasks.filter(task => task.id !== itemID))
  }

  return (
    <div className="App">
      
      <h1>Todo App</h1>

      <div className="todo-list">
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Todo item 1</span>
          <span className="todo-remove">X</span>
        </div>
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Todo item 2</span>
          <span className="todo-remove">X</span>
        </div>
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Todo item 3</span>
          <span className="todo-remove">X</span>
        </div>
        {tasks.map((item, index) =>
          <div className="todo-item" key={index}>
            <input type="checkbox" className="todo-checkbox" />
            <span className="todo-text">{item.name}</span>
            <span className="todo-remove" onClick={() => deleteTask(item.id) }>X</span>
          </div>
        )}
        <input type="text" className="todo-add" placeholder="Add a new item" onChange={(event) => setInputValue(event.target.value)} onKeyDown={addTask} />
      </div>
    </div>
  );
}

export default App;
