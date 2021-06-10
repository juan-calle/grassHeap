const router = require('express').Router();
const {
  getMyPlants,
  savePlant,
  deletePlant
} = require('./controllers/plantController')

const {
  getTasks,
  saveTask,
  getTasksByMonth
} = require('./controllers/taskController');

const {getAllPlants} = require('./controllers/growStuffController')

// interact with GrowStuff API
router.get('/plants', getAllPlants);

// interact with MyPlants database
router.get('/myPlants', getMyPlants);
router.post('/myPlants', savePlant);
router.delete('/myPlants', deletePlant);

// interact with tasks database
router.get('/tasks', getTasks);
router.get('/tasks/month/:month', getTasksByMonth);
router.post('/tasks', saveTask);


module.exports = router;
