import React from "react";
import "./TaskItem.css";

function TaskItem({ task, deleteThisTask }) {
  const taskIcon = `https://www.growstuff.org/crops/${task.crop}.svg`;
  const backUpIcon = `https://www.growstuff.org/assets/icons/planting-ce51a46e4a6edd740221f4a98f2e630a944e30ca040b9000d25179c8f5bc17e8.svg`;
  const disabledButton = (
    <div>
      <button className="disabled" disabled>
        X
      </button>
      <span className="tooltiptext">cannot delete default tasks</span>
    </div>
  );

  return (
    <div>
      <h3>
        {task.crop}{" "}
        <img
          className="taskItem_crop_icon"
          src={taskIcon}
          onError={(e) => (e.target.src = backUpIcon)}
        ></img>
      </h3>
      <p>{task.task}</p>
      {task.userCreated ? (
        <button onClick={() => deleteThisTask(task._id)}>X</button>
      ) : (
        disabledButton
      )}
    </div>
  );
}

export default TaskItem;
