import { useState } from "react";
import "../styles/TodoList.css";

const TodoList = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevenir el comportamiento por defecto de un evento en un elemento del DOM(envio del formulario)
    createNewTask(newTaskName)
    localStorage.setItem('tasks', newTaskName);
    setNewTaskName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una nueva tarea"
          value={newTaskName}
          onChange={(e) => {
            setNewTaskName(e.target.value);
          }}
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default TodoList;
