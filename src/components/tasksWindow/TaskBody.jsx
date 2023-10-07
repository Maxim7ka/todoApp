import React from 'react'

function TaskBody({ deleteTask, toggleTask, task }) {
    return (
        <div className="tasks-item">
            <button className="complete-tick" onClick={() => toggleTask(task.id)} style={task.isCompleted ? { backgroundColor: "#aca191" } : {}}>
                <img src="checked.svg" alt="checked" className="svgIco" />
            </button>
            <div className="task-title" style={task.isCompleted ? { textDecorationLine: "line-through" } : {}}>{task.title}</div>
            <button className="delete-task" onClick={() => deleteTask(task.id)}>
                <img src="trash-can.svg" alt="trash-can" className="svgIco" />
            </button>
        </div>
    )
}

export default TaskBody