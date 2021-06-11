import React, { useState } from 'react';
import { saveTask } from '../../../services/ServerApiServices';
import './AddTaskForm.css'

function AddTaskForm({month, addNewTask}) {

  const [ crop, setCrop ] = useState('');
  const [ task, setTask ] = useState('');

  const updateTask = (e) => {
    setTask(e.target.value);
  }

  const updateCrop = (e) => {
    setCrop(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {month, crop, task, userCreated: true};
    saveTask(newTask)
    addNewTask(newTask);
    setTask('');
    setCrop('');
  }

  return (
    <form className='submitForm' onSubmit={(e)=>submitHandler(e)}>
      <label>Crop</label>
      <input value={crop} name ='crop' type='' onChange={((e)=>{updateCrop(e)})}></input>
      <label>Task</label>
      <input value={task} name ='task' type='text' placeholder='do more weeding...?' onChange={((e)=>{updateTask(e)})}></input>
      <input type='submit'></input>
    </form>
  )
}

export default AddTaskForm;
