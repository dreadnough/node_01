const express = require("express");
const app = express();
const userController = require("./user.controller");

app.get(`/`, userController.getUsers);

app.post(`/`, userController.createUsers);

module.exports = app;
