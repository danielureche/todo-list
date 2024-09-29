import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        const newTask = { text: taskText, completed: false }; 
        setTasks([...tasks, newTask]); 
    };

    const deleteTask = (taskIndex) => {
        const newTasks = tasks.filter((_, index) => index !== taskIndex);  
        setTasks(newTasks); 
    };

    return (
        <div className="App">
        <h1>Todo List</h1>
        {/* Renderiza el formulario para agregar tareas */}
        <TaskForm addTask={addTask} />
        
        {/* Renderiza la lista de tareas, pasándole las tareas y la función para eliminarlas */}
        <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default App
