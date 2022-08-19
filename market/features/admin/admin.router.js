const express = require("express");
const app = express();
const adminController = require("./admin.controller");
const { validator } = require("../validator");
const adminValidator = require("./admin.validator");

app.get(
  `/products`,
  validator.query(adminValidator.getProductsByDays.query),
  adminController.getProductsByDays
);

app.get(
  `/:id`,
  validator.params(adminValidator.getUserProducts.params),
  adminController.getUserProducts
);

module.exports = app;
