const express = require("express");
const app = express();
const userController = require("./user.controller");
const { validator } = require("../validator");
const userValidator = require("./user.validator");

app.get(
    `/search`,
    validator.query(userValidator.findUserByParameters.query),
    userController.findUserByParameters
);

app.get(`/`, userController.getUsers);

app.post(
    `/`,
    validator.body(userValidator.createUser.body),
    userController.createUser
);

app.put(
    `/:id`,
    validator.params(userValidator.updateUser.params),
    validator.body(userValidator.updateUser.body),
    userController.updateUser
);

app.get(`/:id`, userController.findUserById);

module.exports = app;
