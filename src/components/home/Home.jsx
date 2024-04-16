import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import TasksHeading from '../tasksWindow/TasksHeading';
import TaskBody from '../tasksWindow/TaskBody';

const data = [{
  id: nanoid(),
  isCompleted: false,
  title: "Finish this project",
},
{
  id: nanoid(),
  isCompleted: true,
  title: "Read book",
}]

function App() {
  const [tasksList, setTasksList] = useState(
    () => JSON.parse(localStorage.getItem("todo-tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasksList));
  }, [tasksList]);

  function findNumberOfUnfinishedTasks(allTasksList) {
    let number = 0;
    allTasksList.forEach(e => {
      if (e.isCompleted !== true) number += 1;
    });

    return number;
  }

  function toggleTask(id) {
    const copy = [...tasksList];
    const current = copy.find(task => task.id === id);
    current.isCompleted = !current.isCompleted;
    setTasksList(copy);
  }

  // not working
  // function toggleTask(id) {
  //   setTasksList(prevState => {
  //     const copy = [...prevState];
  //     const current = copy.find(task => task.id === id);
  //     current.isCompleted = !current.isCompleted;
  //     console.log(copy);

  //     return copy
  //   });
  // }

  function deleteTask(id) {
    setTasksList([...tasksList].filter(t => t.id !== id));
  }

  return (
    <div className="wrapper">
      <h1>I have {tasksList.length ? findNumberOfUnfinishedTasks(tasksList) : 'no'} tasks to do</h1>
      <div className="tasks-window">
        <TasksHeading setTasksList={setTasksList} />
        <div className="tasks-list">
          {tasksList.length ?
            tasksList.map((task, id) => (
              <TaskBody
                key={id}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                task={task}
              />
            ))
            : <h2 className="no-tasks">There are no tasks</h2>}
        </div>
      </div>
    </div>
  )
}

export default App
