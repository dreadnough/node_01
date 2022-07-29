const Joi = require("@hapi/joi");

module.exports.createUser = {
    body: Joi.object({
        firstName: Joi.string().alphanum().min(1).max(25).required(),
        lastName: Joi.string().alphanum().min(1).max(25).required(),
        userPhone: Joi.string().pattern(new RegExp("^(d{3}) d{3}-d{2}-d{2}$")),
        userCity: Joi.string().alphanum().min(1).max(25).required(),
        userTypeAccountId: Joi.number().integer().min(1).max(4),
        accountRegisteredDate: Joi.date().required(),
        accountExpirationDate: Joi.date().required(),
        accountBalance: Joi.number().integer().min(0),
    }),
};

module.exports.deleteUser = {
  
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

module.exports.updateUser = {
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        firstName: Joi.string().alphanum().min(1).max(25).required(),
        lastName: Joi.string().alphanum().min(1).max(25).required(),
        userPhone: Joi.string().pattern(new RegExp("^(d{3}) d{3}-d{2}-d{2}$")),
        userCity: Joi.string().required(),
        userTypeAccountId: Joi.number().integer().min(1).max(4),
        accountBalance: Joi.number().integer().min(0)
    }),
};

module.exports.findUserById = {
    params: Joi.object({
        id: Joi.number().required(),
    }),
}