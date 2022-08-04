const express = require("express");
const app = express();
const productController = require("./product.controller");
const { validator } = require("../validator");
const productValidator = require("./product.validator");

app.get(`/`, productController.getProducts);

app.post(
    `/`,
    productController.createProductBuildMaterial
  );

module.exports = app;