const express = require("express");
const app = express();
const userController = require("./user.controller");
const { validator } = require("../validator");
const userValidator = require("./user.validator");

app.get(`/`, userController.getUsers);

app.post(`/`,
validator.body(userValidator.createUser.body),
userController.createUsers);

module.exports = app;
