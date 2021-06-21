import { SERVER_URL as base_url } from '../utils/config';
import { Task, MyPlant } from '../common/types';

export const getTasksByMonth = async (month = ''): Promise<Task[]> => {
  const JSONtasks = await fetch(`${base_url}/tasks/month/${month}`);
  const tasks = await JSONtasks.json();
  return tasks;
};

export const saveTask = async (task: Task): Promise<Task> => {
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

export const deleteTask = async (_id = ''): Promise<void> => {
  await fetch(`${base_url}/tasks`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id }),
  });
};

export const getMyPlants = async (): Promise<MyPlant[]> => {
  const JSONPlants = await fetch(`${base_url}/myplants`);
  const myPlants = await JSONPlants.json();
  return myPlants;
};

export const saveToMyPlants = async (plant: MyPlant): Promise<MyPlant> => {
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

export const removeFromMyPlants = async (plantID = 0): Promise<MyPlant> => {
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

interface Fixedheight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

interface GifAnswer {
  fixed_height: Fixedheight;
}

export const getGIF = async (query = ''): Promise<GifAnswer []> => {
  console.log('query', query);
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
