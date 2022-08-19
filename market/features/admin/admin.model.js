const pool = require("../../mysql/mysqlPools").depotPool;
const {
  getResultOrEmptyArray,
  getSingleResultOrEmptyObj,
} = require("../utils/mysql-helper");

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

const getUser = (conn = pool) => ({ userId }) => {
  return conn
    .query(
      `SELECT * FROM users 
      WHERE user_id = ?`,
      [userId]
    )
    .then(getSingleResultOrEmptyObj);
};

const getProductsByCategory = (conn = pool) => ({ userId }) => {
  return conn
    .query(
      `SELECT product_id AS productId,
    product_name AS productName,
    product_price AS productPrice,
    product_characteristict AS productCharacteristict,
    goods_id AS goodsId,
    user_id AS userId,
    product_location AS productLocation,
    product_quantity AS productQuantity,
    product_description AS productDescription,
    product_create_date AS  productCreateDate
    FROM products
    WHERE user_id = ?
    `,
      [userId]
    )
    .then(getResultOrEmptyArray);
};

module.exports = {
  getProductsByDays,
  getUser,
  getProductsByCategory,
};
