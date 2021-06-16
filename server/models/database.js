const DB_USER = process.env.DB_USER;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@cluster0.kbmrd.mongodb.net/grassHeap?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
