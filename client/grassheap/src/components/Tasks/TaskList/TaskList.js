import { getTasksByMonth } from "../../../services/ServerApiServices";
import React, { useState, useEffect } from 'react';

function TaskList({month}){

  const [ tasks, setTasks ] = useState([]);
  const [loadStatus, setLoadStatus] = useState(false);
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


  useEffect(()=> {
    getTasksByMonth(months[month])
    .then((tasks) => {
      setTasks(tasks)
    })
    .then(()=> {
      setLoadStatus(true)
      console.log(tasks)
    })
  }, [])

  return (
    <div>
      <h3>{months[month]}</h3>
    </div>
    )
}

export default TaskList;
