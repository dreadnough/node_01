const express = require("express");
const app = express();
const userController = require("./user.controller");
const { validator } = require("../validator");
const userValidator = require("./user.validator");

app.get(`/`, userController.getUsers);

app.post(`/`,
    validator.body(userValidator.createUser.body),
    userController.createUser
);

app.delete(`/:id`, 
//validator.params(userValidator.deleteUser.params),
//validator.body(userValidator.deleteUser.body),
userController.deleteUser);

app.put(`/:id`, 
validator.params(userValidator.updateUser.params),
validator.body(userValidator.updateUser.body),
userController.updateUser);



app.get(`/:id`, userController.findUserById);

app.get(`/:id`,
validator.params(userValidator.findUserById.params),
userController.findUserById);

module.exports = app;
