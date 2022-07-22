const Joi = require("@hapi/joi");

module.exports.createUser = {
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userPhone: Joi.number().required(),
    userCity: Joi.string().required()
  })
};

module.exports.updateUser = {
  params: Joi.object(
    {
      id: Joi.number().required()
    }
  ),
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userPhone: Joi.number().required(),
    userCity: Joi.string().required()
  })
};