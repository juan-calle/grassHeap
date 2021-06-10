import React from 'react';

function TaskItem ({task}){


  return (
    <div>
      <h3>{task.crop}</h3>
     <img className="icon" src={`https://www.growstuff.org/crops/${task.crop}.svg`}></img>
      <p>{task.task}</p>
    </div>
  )
}

export default TaskItem;
