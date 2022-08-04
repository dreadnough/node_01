const {getProducts, createProduct, createProductBuildMaterial} = require("./product.model");


const getProductService = () => {
    return getProducts()();
  };

const createProductBuildMaterialService = async (product) => {
  const {insertId} = await createProduct()(product);
  await createProductBuildMaterial()(insertId, product);
  return insertId;
  };



  module.exports={
    getProductService,
    createProductBuildMaterialService
};