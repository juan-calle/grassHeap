import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({tasks}){

  const tasksDisplay = tasks.map((task,i) => <TaskItem key={i} task={task}/>)

  return (
    <div>
    {tasksDisplay}
    </div>
    )
}


export default TaskList;
