const express = require("express");
const app = express();
const userController = require("./user.controller");
const { validator } = require("../validator");
const userValidator = require("./user.validator");

app.get(`/`, userController.getUsers);

app.post(`/`,
validator.body(userValidator.createUser.body),
userController.createUsers);

app.delete(`/:id`, 
//validator.params(userValidator.deleteUser.params),
//validator.body(userValidator.deleteUser.body),
userController.deleteUser);

module.exports = app;
