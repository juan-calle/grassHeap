import React from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, deleteThisTask }) {
  const noTasks = (
    <div className="TaskList_empty">
      <p>no tasks for your plants this month</p>
    </div>
  );
  const showTasks = tasks.map((task, i) => (
    <ul key={i}>
      <li>
        <TaskItem deleteThisTask={deleteThisTask} task={task} />
      </li>
    </ul>
  ));

  return (
    <div className="TaskList">{tasks.length === 0 ? noTasks : showTasks}</div>
  );
}

export default TaskList;
