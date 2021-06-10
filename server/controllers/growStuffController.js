const fetch = require('node-fetch');

const base_url = 'https://www.growstuff.org/crops'

async function getAllPlants (req, res) {
  try {
    const JSONplants = await fetch(`${base_url}.json`);
    const plants = await JSONplants.json();
    res.status(200).send(plants);
  } catch (err) {
    res.status(400).send('failed to get all Plants')
  }
}

module.exports = { getAllPlants}
