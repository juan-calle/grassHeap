const Plant = require('../models/Plant')


async function getMyPlants(req, res) {
  try {
    const plants = await Plant.find();
    res.status(200).send(plants);
  } catch (err) {
    res.status(400).send('failed to get')
  }
}

async function savePlant(req, res) {
  const {
    plantID
  } = req.body;
  try {
    const newPlant = new Plant({
      plantID
    });
    await newPlant.save();
    res.status(200).send(newPlant);
  } catch (err) {
    res.status(400).send('failed to save')
  }
}

async function deletePlant(req, res) {
  const {
    plantID
  } = req.body;
  try {
    const deleted = await Plant.deleteOne({
      plantID
    })
    res.status(201).send(deleted);
  } catch (err) {
    res.status(400).send('failed to delete')
  }
}


module.exports = {
  getMyPlants,
  savePlant,
  deletePlant
}
