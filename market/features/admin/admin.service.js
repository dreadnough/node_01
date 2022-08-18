const {
  getProductsByDays,
  getProductsByCategoryJewelry,
  getProductsByCategoryCars,
  getProductsByCategoryBuildingMaterials,
} = require("./admin.model");

const returnResultAllProduct = (
  productInfo,
  productsJewerly,
  productsCars,
  productsBuildingMaterials
) => {
  const result = [
    ...productInfo,
    ...productsJewerly,
    ...productsCars,
    ...productsBuildingMaterials,
  ];
  return result;
};

const getProductsByDaysService = async (quantityDays) => {
  const productInfo = await getProductsByDays()(quantityDays);
  const productIdArray = productInfo.map((item) => item.product_id);
  const firstProductIndex = productIdArray[0];
  const lastProductIndex = productIdArray[productIdArray.length - 1];
  const productsJewerly = await getProductsByCategoryJewelry()(
    firstProductIndex,
    lastProductIndex
  );
  const productsCars = await getProductsByCategoryCars()(
    firstProductIndex,
    lastProductIndex
  );
  const productsBuildingMaterials = await getProductsByCategoryBuildingMaterials()(
    firstProductIndex,
    lastProductIndex
  );

  return returnResultAllProduct(
    productInfo,
    productsJewerly,
    productsCars,
    productsBuildingMaterials
  );
};

module.exports = { getProductsByDaysService };
