import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
    return (
        <ul>
        {tasks.map((task, index) => (
            <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            />
        ))}
        </ul>
    );
}

export default TaskList;