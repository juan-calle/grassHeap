const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  plantID: Number,
  name: String
})

const Plant = mongoose.model('myplant', plantSchema)

module.exports = Plant;
