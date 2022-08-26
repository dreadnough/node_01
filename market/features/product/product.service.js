const {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  deleteProduct,
  updateProduct,
  createProductCar,
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

const createProductJewelryService = async (product) => {
  await createProductJewelry()(product);
  return await createProductJewelry()(product);
};

module.exports = {
  getProductService,
  createProductBuildMaterialService,
  deleteProductService,
  updateProductService,
  createProductCarService,
  createProductJewelryService,
};
