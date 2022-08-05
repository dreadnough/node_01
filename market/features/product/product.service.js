const {
  getProducts,
  createProduct,
  createProductBuildMaterial,
  getById,
  getCarsById,
  getBuildingMaterialsById,
  getJewelryById,
} = require("./product.model");

const CAR_TYPE = 1;
const JEWELRY_TYPE = 2;
const MATERIAL_TYPE = 3;

const getProductService = () => {
  return getProducts()();
};

const getProductById = async (productId) => {
  const productData = await getById()(productId);
  if (productData?.goods_id === CAR_TYPE) {
    const carsData = await getCarsById()(productId);
    return { ...productData, ...carsData };
  }
  if (productData?.goods_id === MATERIAL_TYPE) {
    const materialData = await getBuildingMaterialsById()(productId);
    return { ...productData, ...materialData };
  }
  if (productData?.goods_id === JEWELRY_TYPE) {
    const jewelryData = await getJewelryById()(productId);
    return { ...productData, ...jewelryData };
  }
  return productData;
};

const createProductBuildMaterialService = async (product) => {
  const { insertId } = await createProduct()(product);
  await createProductBuildMaterial()(insertId, product);
  return insertId;
};

module.exports = {
  getProductService,
  createProductBuildMaterialService,
  getProductById,
};
