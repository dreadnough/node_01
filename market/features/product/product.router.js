const express = require("express");
const app = express();
const productController = require("./product.controller");
const { validator } = require("../validator");
const productValidator = require("./product.validator");

app.get("/:id", productController.getById);

app.get(`/`, productController.getProducts);

app.post(
  `/`,
  productController.createProduct,
  validator.body(productValidator.createProduct.body)
);

module.exports = app;
