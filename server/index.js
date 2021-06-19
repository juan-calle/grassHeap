"use strict";

require("dotenv").config();
const express = require("express");
const router = require("./router");
const cors = require("cors");
require("./models/database");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
