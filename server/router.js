const router = require("express").Router();
const {
  getMyPlants,
  savePlant,
  deletePlant,
} = require("./controllers/plantController");

const {
  getTasks,
  saveTask,
  getTasksByMonth,
  getTasksByCrop,
  deleteTask,
} = require("./controllers/taskController");

const {
  getAllPlants,
} = require("./controllers/growStuffController");

const {
  getWeather,
  getFiveDayForecast,
} = require("./controllers/weatherController");
const {getGIFByQuery} = require("./controllers/gifController");

// interact with GrowStuff API
router.get("/plants", getAllPlants);

// interact with MyPlants database
router.get("/myPlants", getMyPlants);
router.post("/myPlants", savePlant);
router.delete("/myPlants", deletePlant);

// interact with tasks database
router.get("/tasks", getTasks);
router.get("/tasks/month/:month", getTasksByMonth);
router.get("/tasks/crop/:crop", getTasksByCrop);
router.post("/tasks", saveTask);
router.delete("/tasks", deleteTask);

// getWeather
router.post("/weather", getWeather);
router.post("/forecast", getFiveDayForecast);

// GET GIPH
router.post("/gifs", getGIFByQuery);

module.exports = router;
