const express = require("express");
const app = express();
const userController = require("./user.controller");
const { validator } = require("../validator");
const userValidator = require("./user.validator");

app.get(`/`, userController.getUsers);

app.post(
    `/`,
    validator.body(userValidator.createUser.body),
    userController.createUser
);

app.put(`/:id`, 
validator.params(userValidator.updateUser.params),
validator.body(userValidator.updateUser.body),
userController.updateUser);

app.delete(`/:id`, 
//validator.params(userValidator.deleteUser.params),
//validator.body(userValidator.deleteUser.body),
userController.deleteUser);

app.get(`/:id`, userController.findUserById);

module.exports = app;
