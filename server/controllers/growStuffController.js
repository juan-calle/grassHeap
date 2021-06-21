const fetch = require("node-fetch");

const base_url = "https://www.growstuff.org/crops";

async function getAllPlants(_, res) {
  try {
    const JSONplants = await fetch(`${base_url}.json`);
    const plants = await JSONplants.json();
    const plantsAugmented = await Promise.all(
      plants.map(async (plant) => {
        const JSONplant = await fetch(`${base_url}/${plant.slug}.json`);
        const plantDetails = await JSONplant.json();
        const details = plantDetails.openfarm_data;
        plant.details = details;
        return plant;
      })
    );
    console.log("plants augmented", plantsAugmented[0]);
    res.status(200).send(plantsAugmented);
  } catch (err) {
    res.status(400).send("failed to get all Plants", err);
  }
}

module.exports = {
  getAllPlants,
};
