const pool = require("../../mysql/mysqlPools").depotPool;
const {
  getResultOrEmptyArray,
  getSingleResultOrEmptyObj,
} = require("../utils/mysql-helper");

const getProducts = (conn = pool) => () => {
    return conn
      .query(
        `
        SELECT * FROM products
      `
      )
      .then(getResultOrEmptyArray);
  };

module.exports={getProducts};