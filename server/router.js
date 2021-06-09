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
} = require('./controllers/taskController')

router.get('/myPlants', getMyPlants);
router.post('/myPlants', savePlant);
router.delete('/myPlants', deletePlant);

router.get('/tasks', getTasks);
router.get('/tasks/month/:month', getTasksByMonth);
router.post('/tasks', saveTask);


module.exports = router;
