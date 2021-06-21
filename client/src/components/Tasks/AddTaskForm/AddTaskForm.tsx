import React, { useState } from 'react';
import 'react-dropdown/style.css';
import { saveTask } from '../../../services/ServerApiServices';
// import { plantsContext } from '../../App/App';
import './AddTaskForm.css';
import { Task } from '../../../common/types';

interface AddTaskFormProps {
  month: string;
  addNewTask: (task: Task) => void;
}

function AddTaskForm({ month, addNewTask } : AddTaskFormProps): JSX.Element {
  const [crop, setCrop] = useState<string>('');
  const [task, setTask] = useState<string>('');

  // const { myPlants } = useContext(plantsContext);

  // const plantList = myPlants.map(plant => plant.name).sort();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = { month, crop, task, userCreated: true };
    saveTask(newTask);
    addNewTask(newTask);
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
        onChange={e => setCrop(e.target.value)}></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default AddTaskForm;
