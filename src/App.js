import React from "react";
import { useState } from "react";
import TodoList from "../src/components/TodoList";
import "./App.css";

function App() {
  const [tasksItems, setTasksItems] = useState([
    { name: "Mi tarea1", done: false },
    { name: "Mi tarea2", done: false },
    { name: "Mi tarea3", done: false },
  ]);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
    else{
      alert('Tarea ya existe en la lista')
    }
  }

  return (
    <div className="app">
      <TodoList createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
