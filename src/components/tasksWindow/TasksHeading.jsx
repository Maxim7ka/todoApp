import { nanoid } from "nanoid";
import { useState } from "react";

function TasksHeading({ setTasksList }) {
    const [taskValue, setTaskValue] = useState('');

    function addTask(taskValue) {
        if (taskValue == '') return;

        setTasksList(prevTasks => (
            [
                ...prevTasks,
                {
                    id: nanoid(),
                    isCompleted: false,
                    title: taskValue
                }
            ]
        ));

        setTaskValue('');
    }

    function handleChange(event) {
        const { value } = event.target;

        setTaskValue(value);
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            addTask(taskValue);
        }
    }

    return (
        <div className="tasks-heading">
            <input
                type="text"
                value={taskValue}
                className="task-input"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
            <button className="plus-task" onClick={() => {
                addTask(taskValue);
            }}>
                <img src="plus.svg" alt="plus" className="svgIco" />
            </button>
        </div>
    )
}

export default TasksHeading