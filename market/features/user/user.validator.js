const Joi = require("@hapi/joi");

module.exports.createUser = {
  body: Joi.object({
    userName: Joi.string().required(),
  })
};