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
import { MyPlant, Task } from '../../../common/types';

interface MonthProps {
  monthNumber: number;
  monthName: string;
}



function MonthsTasksBox({ monthNumber, monthName }: MonthProps): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [seasonIcon, setSeasonIcon] = useState('');

  useEffect(() => {
    getMyPlants().then((myPlants: MyPlant[]) => {
      getTasksByMonth(monthName).then((tasks: Task[]) => {
        // filter tasks to those which are relevant to plants saved in myPlants database OR added manually
        const myTasks = tasks.filter((task : Task) =>
          myPlants.some(plant => plant.name === task.crop || task.userCreated),
        );
        setTasks(myTasks);
      });
    });
  }, [monthNumber, monthName]);

  useEffect(() => {
    setSeasonIcon(getSeason((monthNumber + 1)));
  }, [monthNumber, monthName]);

  function deleteThisTask(_id:string): void {
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
        addNewTask={(task : Task) => setTasks([...tasks, task])}
        month={monthName}
        tasks={tasks}
      />
    </div>
  );
}

export default MonthsTasksBox;
