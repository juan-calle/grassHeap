const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/grassHeap', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
