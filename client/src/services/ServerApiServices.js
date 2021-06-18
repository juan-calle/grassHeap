import { SERVER_URL as base_url } from '../utils/config';

export const getTasksByMonth = async (month = '') => {
  const JSONtasks = await fetch(`${base_url}/tasks/month/${month}`);
  const tasks = await JSONtasks.json();
  return tasks;
};

export const saveTask = async (task = {}) => {
  const JSONTask = JSON.stringify(task);
  const response = await fetch(`${base_url}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONTask,
  });
  return response.json();
};

export const deleteTask = async (_id = {}) => {
  await fetch(`${base_url}/tasks`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id }),
  });
};

export const getMyPlants = async () => {
  const JSONPlants = await fetch(`${base_url}/myplants`);
  const myPlants = await JSONPlants.json();
  return myPlants;
};

export const saveToMyPlants = async (plant = {}) => {
  const JSONPlant = JSON.stringify(plant);
  const response = await fetch(`${base_url}/myplants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONPlant,
  });
  return response.json();
};

export const removeFromMyPlants = async (plantID = 0) => {
  const JSONPlant = JSON.stringify({ plantID });
  const response = await fetch(`${base_url}/myplants`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONPlant,
  });
  return response.json();
};

export const getGIF = async (query = {}) => {
  const JSONQuery = JSON.stringify(query);
  const response = await fetch(`${base_url}/gifs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONQuery,
  });
  return response.json();
};
