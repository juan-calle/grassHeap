const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  city: String,
});

const City = mongoose.model("city", plantSchema, "City");

module.exports = City;
