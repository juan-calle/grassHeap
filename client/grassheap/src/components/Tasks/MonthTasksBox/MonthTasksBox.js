import React, {useState, useEffect } from 'react';
import TaskList from '../TaskList/TaskList'
import { getTasksByMonth } from '../../../services/ServerApiServices';

function MonthsTasksBox({monthNumber, monthName}) {

  const [ tasks, setTasks ] = useState([]);

  useEffect(()=>{
    getTasksByMonth(monthName).then(tasks => setTasks(tasks));
  }, [])

  return (
    <div>
      <h3>{monthName} {monthNumber}</h3>
      <TaskList tasks={tasks} />
    </div>
    )
}

export default MonthsTasksBox;
