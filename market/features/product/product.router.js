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

app.delete(
  `/:id`,
  validator.params(productValidator.deleteProduct.params),
  productController.deleteProduct
);

app.put(
  `/jewelry/:id`,
  validator.params(productValidator.updateProductJewelry.params),
  validator.body(productValidator.updateProductJewelry.body),
  productController.updateProductJewelry
);

app.post(
  `/cpj`,
  validator.body(productValidator.createProductJewelry.body),
  productController.createProductJewelry
);

module.exports = app;
