require("dotenv").config();

const routes = require("./routes");
const express = require('express');
const app = express();
const port = 3000;

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})