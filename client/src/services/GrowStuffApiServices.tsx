import { SERVER_URL as base_url } from '../utils/config';
import { Plant } from '../common/types';

export const getAllPlants = async (): Promise<Plant[]> => {
  try {
    console.log('in getallplants');
    const JSONPlants = await fetch(`${base_url}/plants`);
    console.log('in getallplants after fetch');
    const plants = await JSONPlants.json();
    console.log('in getallplants after fetch & JSON');
    return plants;
  } catch (err) {
    console.log(err);
    return err;
  }
};
