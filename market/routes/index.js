const express = require("express");
const app = express();

const user = require("../features/user/user.router");
const product = require("../features/product/product.router");

app.use("/users", user);
app.use("/products", product);

module.exports = app;
