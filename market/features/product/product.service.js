const {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  deleteProduct,
  updateProduct,
  updateProductJewelry,
  updateProductCars,
  createProductCar,
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

const updateProductJewelryService = async (productId, product) => {
  await updateProduct()(productId, product);
  return await updateProductJewelry()(productId, product);
};

const updateProductCarsService = async (productId, product) => {
  await updateProduct()(productId, product);
  return await updateProductCars()(productId, product);
};

module.exports = {
  getProductService,
  createProductBuildMaterialService,
  deleteProductService,
  updateProductJewelryService,
  updateProductCarsService,
  createProductCarService,
};
