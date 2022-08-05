const Joi = require("@hapi/joi");

module.exports.createProduct = {
  body: Joi.object({
    productName: Joi.string().alphanum().min(1).max(30).required(),
    productPrice: Joi.number().integer().min(1).max(8),
    userId: Joi.number().integer().min(1).max(4),
    goodsId: Joi.number().integer().min(1).max(4),
    productLocation: Joi.string().alphanum().min(1).max(25).required(),
    productQuantity: Joi.number().integer().min(0),
    productDescription: Joi.string().alphanum().min(1).max(30).required(),
    productCreateDate: Joi.date().required(),
  }),
};

module.exports.createProductBuidMaterial = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    typeMaterial: Joi.string().alphanum().min(1).max(30).required(),
    origin: Joi.string().alphanum().min(1).max(25).required(),
  }),
};

module.exports.deleteProduct = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
};

module.exports.updateProductJewelry = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    goodsId: Joi.number().required(),
    productId: Joi.number().required(),
    jewelryType: Joi.string().alphanum().min(1).max(50),
    weight: Joi.string().alphanum().min(1).max(20),
    material: Joi.string().alphanum().min(1).max(50),
    brand: Joi.string().alphanum().min(1).max(50),
    size: Joi.string().alphanum().min(1).max(50),
  }),
};
