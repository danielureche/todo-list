import React from 'react';

function Task({ task, index, deleteTask, editTask }) {
    return (
        <li>
            <span className="task-text">{task.text}</span>
            <div className="button-container">
                <button className="update-button" onClick={() => editTask(index)}>Update</button> 
                <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
        </li>
    );
}

export default Task;