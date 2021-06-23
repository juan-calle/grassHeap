const DB_USER = process.env.DB_USER;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb://localhost:${ process.env.NODE_ENV === "test" ? process.env.DATABASE_TEST : process.env.DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

module.exports = db;
