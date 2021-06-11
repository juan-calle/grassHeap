const router = require('express').Router();
const {
  getMyPlants,
  savePlant,
  deletePlant
} = require('./controllers/plantController')

const {
  getTasks,
  saveTask,
  getTasksByMonth,
  getTasksByCrop,
  deleteTask
} = require('./controllers/taskController');

const {
  getPlantByName,
  getAllPlants
} = require('./controllers/growStuffController');

const { getWeather } = require('./controllers/weatherController');

// interact with GrowStuff API
router.get('/plants', getAllPlants);
router.get('/plant/:name', getPlantByName)

// interact with MyPlants database
router.get('/myPlants', getMyPlants);
router.post('/myPlants', savePlant);
router.delete('/myPlants', deletePlant);

// interact with tasks database
router.get('/tasks', getTasks);
router.get('/tasks/month/:month', getTasksByMonth);
router.get('/tasks/crop/:crop', getTasksByCrop);
router.post('/tasks', saveTask);
router.delete('/tasks', deleteTask);

// getWeather
router.get('/weather', getWeather)

module.exports = router;
