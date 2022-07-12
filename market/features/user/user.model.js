const pool = require("../../mysql/mysqlPools").depotPool;
const {
    getResultOrEmptyArray
} = require("../utils/mysql-helper");

const getUsers = (conn = pool) => () => {
  return conn
    .query(
      `
      SELECT * FROM users
    `,
    )
    .then(getResultOrEmptyArray);
};

module.exports = {
    getUsers
};
