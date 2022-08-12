const {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  deleteProduct,
  updateProduct,
  updateProductJewelry,
  createProductJewelry,
} = require("./product.model");

const getProductService = () => {
  return getProducts()();
};

const createProductBuildMaterialService = async (product) => {
  const { insertId } = await createProduct()(product);
  await createProductBuildMaterial()(insertId, product);
  return insertId;
};

const deleteProductService = (productId) => {
  return deleteProduct()(productId);
};

const updateProductJewelryService = async (productId, product) => {
  await updateProduct()(productId, product);
  return await updateProductJewelry()(productId, product);
};

const createProductJewelryService = async (product) => {
  await createProductJewelry()(product);
  return await createProductJewelry()(product);
};

module.exports = {
  getProductService,
  createProductBuildMaterialService,
  deleteProductService,
  updateProductJewelryService,
  createProductJewelryService,
};
