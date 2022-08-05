const {getProducts, createProduct, createProductBuildMaterial, updateProductCars} = require("./product.model");

const getProductService = () => {
    return getProducts()();
  };

const createProductBuildMaterialService = async (product) => {
  const {insertId} = await createProduct()(product);
  await createProductBuildMaterial()(insertId, product);
  return insertId;
  };
  
const updateProductCarsService = (carId, product) => {
    return updateProductsCars()(carId, product);
  };

 module.exports={
    getProductService,
    createProductBuildMaterialService,
    updateProductCarsService
};