const {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  deleteProduct,
  updateProduct,
  createProductCar,
} = require("./product.model");

const getProductService = () => {
  return getProducts()();
};

const createProductBuildMaterialService = (product) => {
  return createProductBuildMaterial()(product);
};

const createProductCarService = async (product) => {
  const { insertId } = await createProduct()(product);
  await createProductCar()(insertId, product);
  return insertId;
};

const deleteProductService = (productId) => {
  return deleteProduct()(productId);
};

const updateProductService = async (productId, productInfo) => {
  return updateProduct()(productId, productInfo);
};

module.exports = {
  getProductService,
  createProductBuildMaterialService,
  deleteProductService,
  updateProductService,
  createProductCarService,
};
