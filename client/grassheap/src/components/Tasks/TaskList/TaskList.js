import React from 'react';

function TaskList({tasks}){

  const tasksDisplay = tasks.map((task,i) => {
    return (
      <div key={i}>
        <h3>
        {task.crop}
        </h3>
        <p>
        {task.task}
        </p>
      </div>

    )
  })
  return (
    <div>
    {tasksDisplay}
    </div>
    )
}


export default TaskList;
