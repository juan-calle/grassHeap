const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  month: String,
  week: Number,
  crop: String,
  task: String,
  plantID: Number,
  userCreated: Boolean
})

const Task = mongoose.model('task', taskSchema)

module.exports = Task;
