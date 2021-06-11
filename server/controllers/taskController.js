const Task = require('../models/Task')

async function getTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(400).send('failed to get')
  }
}

async function saveTask(req, res) {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(200).send(newTask);
  } catch (err) {
    res.status(400).send('failed to save')
  }
}

async function getTasksByMonth(req, res) {
  const month = req.params.month;
  try {
    const tasks = await Task.find({
      month
    });
    res.status(200).send(tasks);
  } catch (err) {
    res.status(400).send('failed to get')
  }
}

async function getTasksByCrop(req, res) {
  const crop = req.params.crop;
  try {
    const tasks = await Task.find({
      crop
    });
    res.status(200).send(tasks);
  } catch (err) {
    res.status(400).send('failed to get')
  }
}

module.exports = {
  getTasksByCrop,
  getTasks,
  saveTask,
  getTasksByMonth
}
