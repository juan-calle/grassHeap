import React, { useState } from 'react';
import { saveTask } from '../../../services/ServerApiServices';
import './AddTaskForm.css';
import { Task } from '../../../common/types';

interface AddTaskFormProps {
  month: string;
  addNewTask: (task: Task) => void;
  tasks: Task[];
}

function AddTaskForm({
  month,
  addNewTask,
  tasks,
}: AddTaskFormProps): JSX.Element {
  const [crop, setCrop] = useState<string>('');
  const [task, setTask] = useState<string>('');

  // const { myPlants } = useContext(plantsContext);

  // const plantList = myPlants.map(plant => plant.name).sort();
  function taskIsNew(newTask: Task, tasks: Task[]) {
    const exists = Boolean(
      tasks.find((task: Task) => {
        return (
          task.month === newTask.month &&
          task.crop === newTask.crop &&
          task.task === newTask.task
        );
      }),
    );
    return !exists;
  }

  async function saveAndAddTask(task: Task) {
    const fullTask = await saveTask(task);
    addNewTask(fullTask);
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = { month, crop, task, userCreated: true };
    if (taskIsNew(newTask, tasks)) {
      saveAndAddTask(newTask);
    }
    setTask('');
    setCrop('');
  };

  return (
    <form className="submitForm" onSubmit={e => submitHandler(e)}>
      <input
        className="form__input"
        value={task}
        type="text"
        placeholder="Add custom task for this month"
        onChange={e => setTask(e.target.value)}></input>
      <input
        className="form__input"
        value={crop}
        type="text"
        placeholder="Add relevant crop"
        onChange={e => setCrop(e.target.value.toLowerCase())}></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default AddTaskForm;
