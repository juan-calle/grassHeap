import React, { useState, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import {
  deleteTask,
  getMyPlants,
  getTasksByMonth,
} from "../../../services/ServerApiServices";
import "./MonthTasksBox.css";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

function getSeason(monthNumber) {
  let season = "";
  switch (monthNumber) {
    case "12":
    case "1":
    case "2":
      season = "⛄";
      break;
    case "3":
    case "4":
    case "5":
      season = "🌼";
      break;
    case "6":
    case "7":
    case "8":
      season = "🌞";
      break;
    case "9":
    case "10":
    case "11":
      season = "🍂";
      break;
  }
  return season;
}

function MonthsTasksBox({ monthNumber, monthName }) {
  const [tasks, setTasks] = useState([]);
  const [seasonIcon, setSeasonIcon] = useState("");

  useEffect(() => {
    getMyPlants().then((myPlants) => {
      getTasksByMonth(monthName).then((tasks) => {
        // filter tasks to those which are relevant to plants saved in myPlants database OR added manually
        const myTasks = tasks.filter((task) =>
          myPlants.some((plant) => plant.name === task.crop || task.userCreated)
        );
        setTasks(myTasks);
      });
    });
  }, [monthNumber, monthName]);

  useEffect(() => {
    setSeasonIcon(getSeason((monthNumber + 1).toString()));
  }, [monthNumber, monthName]);

  function addNewTask(task) {
    setTasks([...tasks, task]);
  }
  function deleteThisTask(_id) {
    setTasks([...tasks].filter((task) => task._id !== _id));
    deleteTask(_id);
  }

  return (
    <div className={`MonthTaskBox__${seasonIcon}`}>
      <h2>
        {monthName} {seasonIcon}
      </h2>
      <TaskList deleteThisTask={deleteThisTask} tasks={tasks} />
      <AddTaskForm addNewTask={addNewTask} month={monthName} />
    </div>
  );
}

export default MonthsTasksBox;
