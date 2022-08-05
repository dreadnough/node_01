const express = require("express");
const app = express();
const productController = require("./product.controller");
const { validator } = require("../validator");
const productValidator = require("./product.validator");

app.get(`/`, productController.getProducts);

app.post(
    `/`,
    productController.createProduct,
    validator.body(productValidator.createProduct.body)
  );

  app.put(
    `/:id`,
    validator.params(productValidator.updateProductCars.params),
    validator.body(productValidator.updateProductCars.body),
    productController.updateProductCars
  );

module.exports = app;