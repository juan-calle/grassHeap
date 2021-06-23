"use strict";
const app = require('./server');
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.clear();
  console.log(`app listening on ${PORT}`);
});
