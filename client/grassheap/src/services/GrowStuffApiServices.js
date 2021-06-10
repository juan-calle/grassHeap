const base_url = 'http://localhost:3001';

exports.getAllPlants = async () => {
  try {
    const JSONPlants = await fetch(`${base_url}/plants`);
    const plants = await JSONPlants.json();
    return plants;
  } catch (err) {
    return err;
  }
}
