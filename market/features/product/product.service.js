const {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  deleteProduct,
  updateProductJewelry,
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

const updateProductJewelryService = (jewelryId, product) => {
  return updateProductJewelry()(jewelryId, product);
};

module.exports = {
  getProductService,
  createProductBuildMaterialService,
  deleteProductService,
  updateProductJewelryService,
};
