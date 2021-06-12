import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { saveTask } from "../../../services/ServerApiServices";
import "./AddTaskForm.css";

function AddTaskForm({ month, addNewTask }) {
  const options = ["one", "two", "three"];
  const [crop, setCrop] = useState("");
  const [task, setTask] = useState("");

  const updateTask = (e) => {
    setTask(e.target.value);
  };

  const updateCrop = (crop) => {
    setCrop(crop.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { month, crop, task, userCreated: true };
    saveTask(newTask);
    addNewTask(newTask);
    setTask("");
    setCrop("");
  };

  return (
    <form className="submitForm" onSubmit={(e) => submitHandler(e)}>
      <input
        className="form__input"
        value={task}
        type="text"
        placeholder="Add custom task for this month"
        onChange={(e) => updateTask(e)}
      ></input>
      <Dropdown
        className="form__input form__input--dropDown"
        options={options}
        onChange={(e) => updateCrop(e)}
        placeholder="assign to crop"
      />
      <input type="submit"></input>
    </form>
  );
}

export default AddTaskForm;
