const fetch = require('node-fetch');

const base_url = 'https://www.growstuff.org/crops'

async function getPlantByName(req, res) {
  const plantName = req.params.name;
  try {
    const JSONplant = await fetch(`${base_url}/${plantName}.json`);
    const plant = await JSONplant.json();
    res.status(200).send(plant);
  } catch (err) {
    res.status(400).send('failed to get plant')
  }
}

async function getAllPlants (_, res) {
  try {
    const JSONplants = await fetch(`${base_url}.json`);
    const plants = await JSONplants.json();
    res.status(200).send(plants);
  } catch (err) {
    res.status(400).send('failed to get all Plants')
  }
}

module.exports = {
  getAllPlants,
  getPlantByName
}
