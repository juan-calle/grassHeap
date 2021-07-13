const DB_USER = process.env.DB_USER;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;

const DB_NAME =
  process.env.NODE_ENV === "test"
    ? process.env.DATABASE_TEST
    : process.env.DATABASE;

let connectionURI;
if (DB_USER && DB_USER_PASSWORD && process.env.NODE_ENV !== "test")
  connectionURI = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@cluster0.kbmrd.mongodb.net/grassHeap?retryWrites=true&w=majority`;
else connectionURI = `mongodb://localhost:27017/${DB_NAME}`;

const mongoose = require("mongoose");
mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
