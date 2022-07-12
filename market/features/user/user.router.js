const express = require("express");
const app = express();
const userController = require("./user.controller");

app.get(
  `/`,
  userController.getUsers
);

module.exports = app;
