import React from 'react';
import './TaskItem.css'

function TaskItem ({task}){
  console.log(task);
  return (
    <div>
      <h3>{task.crop} <img className="taskItem_crop_icon" src={`https://www.growstuff.org/crops/${task.crop}.svg`}></img></h3>
      <p>{task.task}</p>
    </div>
  )
}

export default TaskItem;
