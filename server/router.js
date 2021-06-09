const router = require('express').Router();
const {
  getAllPlants,
  getMyPlants,
  savePlant,
  deletePlant
} = require('./controllers/plantController')

router.get('/myPlants', getMyPlants);
router.post('/myPlants', savePlant);
router.delete('/myPlants', deletePlant);

module.exports = router;
