import { SERVER_URL as base_url } from '../utils/config';

export const getAllPlants = async () => {
  try {
    const JSONPlants = await fetch(`${base_url}/plants`);
    const plants = await JSONPlants.json();
    return plants;
  } catch (err) {
    return err;
  }
};
