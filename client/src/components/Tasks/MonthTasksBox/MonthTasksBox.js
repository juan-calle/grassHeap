import React, { useState, useEffect } from 'react';
import TaskList from '../TaskList/TaskList';
import {
  deleteTask,
  getMyPlants,
  getTasksByMonth,
} from '../../../services/ServerApiServices';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import { getSeason } from './getSeasonFunction';
import './MonthTasksBox.css';

function MonthsTasksBox({ monthNumber, monthName }) {
  const [tasks, setTasks] = useState([]);
  const [seasonIcon, setSeasonIcon] = useState('');

  useEffect(() => {
    getMyPlants().then(myPlants => {
      getTasksByMonth(monthName).then(tasks => {
        // filter tasks to those which are relevant to plants saved in myPlants database OR added manually
        const myTasks = tasks.filter(task =>
          myPlants.some(plant => plant.name === task.crop || task.userCreated),
        );
        setTasks(myTasks);
      });
    });
  }, [monthNumber, monthName]);

  useEffect(() => {
    setSeasonIcon(getSeason((monthNumber + 1).toString()));
  }, [monthNumber, monthName]);

  function deleteThisTask(_id) {
    setTasks([...tasks].filter(task => task._id !== _id));
    deleteTask(_id);
  }

  return (
    <div className={`MonthTaskBox MonthTaskBox__${monthNumber}`}>
      <h2>
        {monthName} {seasonIcon}
      </h2>
      <TaskList deleteThisTask={deleteThisTask} tasks={tasks} />
      <AddTaskForm
        addNewTask={task => setTasks([...tasks, task])}
        month={monthName}
      />
    </div>
  );
}

export default MonthsTasksBox;
