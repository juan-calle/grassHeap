import { SERVER_URL as base_url } from '../utils/config';

export const getAllPlants = async () => {
  try {
    console.log('Im here');
    const JSONPlants = await fetch(`${base_url}/plants`);
    const plants = await JSONPlants.json();
    return plants;
  } catch (err) {
    return err;
  }
};

export const getPlantByName = async (name = '') => {
  try {
    const JSONPlant = await fetch(`${base_url}/plant/${name}`);
    const plant = await JSONPlant.json();
    return plant;
  } catch (err) {
    return err;
  }
};
