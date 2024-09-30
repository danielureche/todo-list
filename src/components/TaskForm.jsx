import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, taskToEdit }) {
    const [taskText, setTaskText] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTaskText(taskToEdit.text);
        }else{
            setTaskText('');
        }

    }, [taskToEdit])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (taskText.trim() === '') return;
        
        if (taskToEdit){
            updateTask(taskToEdit.index, taskText);
        } else{
            addTask(taskText);
        }
        setTaskText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="addAndUpdate-button" type="submit">
                {taskToEdit ? 'Update' : 'Add'}
            </button>
        </form>
    );
}

export default TaskForm;