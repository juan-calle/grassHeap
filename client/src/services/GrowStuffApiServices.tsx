import { SERVER_URL as base_url } from '../utils/config';
import { Plant } from '../common/types';

export const getAllPlants = async (): Promise<Plant[]> => {
  try {
    const JSONPlants = await fetch(`${base_url}/plants`);
    const plants = await JSONPlants.json();
    return plants;
  } catch (err) {
    return err;
  }
};

export const getPlantByName = async (name = ''): Promise<Plant> => {
  try {
    const JSONPlant = await fetch(`${base_url}/crops/${name}`);
    const plant = await JSONPlant.json();
    return plant;
  } catch (err) {
    return err;
  }
};
