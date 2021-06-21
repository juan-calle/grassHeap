import { SERVER_URL as base_url } from '../utils/config';
import { Plant } from '../common/types';

export const getAllPlants = async (): Promise<Plant[]> => {
  try {
<<<<<<< Updated upstream:client/src/services/GrowStuffApiServices.tsx
    console.log('in getallplants');
    const JSONPlants = await fetch(`${base_url}/plants`);
    console.log('in getallplants after fetch');
=======
    const JSONPlants = await fetch(`${base_url}/crops`);
>>>>>>> Stashed changes:client/src/services/GrowStuffApiServices.js
    const plants = await JSONPlants.json();
    console.log('in getallplants after fetch & JSON');
    return plants;
  } catch (err) {
<<<<<<< Updated upstream:client/src/services/GrowStuffApiServices.tsx
    console.log(err);
=======
    return err;
  }
};

export const getPlantByName = async (name = '') => {
  try {
    const JSONPlant = await fetch(`${base_url}/crops/${name}`);
    const plant = await JSONPlant.json();
    return plant;
  } catch (err) {
>>>>>>> Stashed changes:client/src/services/GrowStuffApiServices.js
    return err;
  }
};
