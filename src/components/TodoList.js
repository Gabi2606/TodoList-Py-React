import '../styles/TodoList.css'

const TodoList = () =>{
    return (
        <>
       <input type="text"  placeholder="Ingrese una nueva tarea"/>
       <button> Agregar</button>
        <div className='list'>
        <ul>
            <li>Tarea1</li>
            <li>Tarea2</li>
            <li>Tarea3</li>
            <li>Tarea4</li>
            <li>Tarea5</li>
        </ul>
       </div>   

        </>
    );
}

export default TodoList