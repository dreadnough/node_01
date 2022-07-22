const express = require("express");
const app = express();

const user = require("../features/user/user.router");

app.use("/users", user);

module.exports = app;
