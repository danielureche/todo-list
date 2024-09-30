import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const addTask = (taskText) => {
        const newTask = { text: taskText, completed: false }; 
        setTasks([...tasks, newTask]); 
    };

    const deleteTask = (taskIndex) => {
        const newTasks = tasks.filter((_, index) => index !== taskIndex);  
        setTasks(newTasks); 
    };

    const editTask = (taskIndex) => {
        setTaskToEdit({ text: tasks[taskIndex].text, index: taskIndex });
    };

    const updateTask = (taskIndex, newText) => {
        const updatedTasks = tasks.map((task, index) =>
            index === taskIndex ? { ...task, text: newText } : task
        );
        setTasks(updatedTasks);
        setTaskToEdit(null); // Limpiamos la tarea que se está editando
    };
    
    return (
        <div className="App">
            <h1>Todo List</h1>
            <TaskForm 
                addTask={addTask} 
                updateTask={updateTask}
                taskToEdit={taskToEdit}
            />

            <TaskList 
                tasks={tasks} 
                deleteTask={deleteTask} 
                editTask={editTask} 
            />
        </div>
    );
}

export default App
