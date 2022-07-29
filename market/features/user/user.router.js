const express = require("express");
const app = express();
const userController = require("./user.controller");
const { validator } = require("../validator");
const userValidator = require("./user.validator");

app.get(`/`, userController.getUsers);
app.get(`/with-products`, userController.getUsersProduct);
app.get(
  `/with-products/type-account/:type`,
  userController.getUsersByTypeWidthProduct
);

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

app.get(
  `/:id`,
  validator.params(userValidator.findUserById.params),
  userController.findUserById
);

module.exports = app;
