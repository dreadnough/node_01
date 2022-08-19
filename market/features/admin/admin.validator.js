const Joi = require("@hapi/joi");

module.exports.getProductsByDays = {
  query: Joi.object({
    quantityDays: Joi.number().required(),
  }).min(1),
};

module.exports.getUserProducts = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};
