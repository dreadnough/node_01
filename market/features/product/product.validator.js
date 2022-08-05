const Joi = require("@hapi/joi");

module.exports.createProduct = {
    body: Joi.object({
      productName: Joi.string().alphanum().min(1).max(30).required(),
      productPrice: Joi.number().integer().min(1).max(8),
      userId: Joi.number().integer().min(1).max(4),
      goodsId: Joi.number().integer().min(1).max(4),
      productLocation: Joi.string().alphanum().min(1).max(25).required(),
      productQuantity: Joi.number().integer().min(0),
      productDescription:Joi.string().alphanum().min(1).max(30).required(),
      productCreateDate: Joi.date().required()
    })
  };

  module.exports.createProductBuidMaterial = {
    params: Joi.object({
        id: Joi.number().required(),
      }),
    body: Joi.object({
      typeMaterial: Joi.string().alphanum().min(1).max(30).required(),
      origin: Joi.string().alphanum().min(1).max(25).required(),
    })
  };

  module.exports.updateProductCars = {
    params: Joi.object({
      id: Joi.number().required(),
    }),
    body: Joi.object({
      carType: Joi.string().alphanum().min(1).max(25).required(),
      carBody: Joi.string().alphanum().min(1).max(25).required(),
      engineCapacity: Joi.string().alphanum().min(1).max(20),
      Age: Joi.number().integer().min(1).max(3).required(),
      Mileage: Joi.number().integer().min(0),
    }),
  };