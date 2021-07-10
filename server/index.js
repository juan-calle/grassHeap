"use strict";
<<<<<<< HEAD

require("dotenv").config();
const express = require("express");
const router = require("./router");
const cors = require("cors");
require("./models/database");

const PORT = process.env.PORT;
const app = express();
=======
const app = require('./server');
const PORT = process.env.PORT || 3001;
>>>>>>> 4dc1d82d2d454840a4eab416129be622a517510d


app.listen(PORT, () => {
  console.clear();
  console.log(`app listening on ${PORT}`);
});
