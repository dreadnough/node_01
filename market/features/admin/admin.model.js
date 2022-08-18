const pool = require("../../mysql/mysqlPools").depotPool;
const { getResultOrEmptyArray } = require("../utils/mysql-helper");

const getProductsByDays = (conn = pool) => (quantityDays) => {
  return conn
    .query(
      `
      SELECT * FROM products WHERE product_create_date > DATE_SUB(NOW(), INTERVAL ? DAY)
    `,
      [quantityDays]
    )
    .then(getResultOrEmptyArray);
};

const getProductsByCategoryJewelry = (conn = pool) => (
  firstProductIndex,
  lastProductIndex
) => {
  return conn
    .query(
      `
      SELECT * FROM category_jewelry WHERE product_id >= ? AND product_id <= ?
      `,
      [firstProductIndex, lastProductIndex]
    )
    .then(getResultOrEmptyArray);
};

const getProductsByCategoryCars = (conn = pool) => (
  firstProductIndex,
  lastProductIndex
) => {
  return conn
    .query(
      `
      SELECT * FROM category_cars WHERE product_id >= ? AND product_id <= ?
      `,
      [firstProductIndex, lastProductIndex]
    )
    .then(getResultOrEmptyArray);
};

const getProductsByCategoryBuildingMaterials = (conn = pool) => (
  firstProductIndex,
  lastProductIndex
) => {
  return conn
    .query(
      `
      SELECT * FROM category_building_materials WHERE product_id >= ? AND product_id <= ?
      `,
      [firstProductIndex, lastProductIndex]
    )
    .then(getResultOrEmptyArray);
};

module.exports = {
  getProductsByDays,
  getProductsByCategoryJewelry,
  getProductsByCategoryCars,
  getProductsByCategoryBuildingMaterials,
};
