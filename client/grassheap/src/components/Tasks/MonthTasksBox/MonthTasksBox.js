import React, {useState, useEffect } from 'react';
import TaskList from '../TaskList/TaskList'
import { getMyPlants, getTasksByMonth } from '../../../services/ServerApiServices';

function MonthsTasksBox({monthNumber, monthName}) {

  const [ tasks, setTasks ] = useState([]);

  useEffect(()=>{
    getMyPlants().then(myPlants => {
      getTasksByMonth(monthName).then(tasks => {
        const myTasks = tasks.filter(task => myPlants.some(plant => plant.name === task.crop))
        setTasks(myTasks)
      });
    })
  }, []);

  return (
    <div>
      <h3>{monthName} {monthNumber}</h3>
      <TaskList tasks={tasks} />
    </div>
    )
}

export default MonthsTasksBox;
