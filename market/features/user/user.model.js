const pool = require("../../mysql/mysqlPools").depotPool;
const { getResultOrEmptyArray } = require("../utils/mysql-helper");

const getUsers =
    (conn = pool) =>
    () => {
        return conn
            .query(
                `
      SELECT * FROM users
    `
            )
            .then(getResultOrEmptyArray);
    };

const createUsers =
    (conn = pool) =>
    ({ first_name, last_name, user_phone, user_city }) => {
        return conn
            .query(
                `INSERT INTO users 
            (first_name, last_name, user_phone, user_city)
            VALUES(?,?,?,?);`,
                [first_name, last_name, user_phone, user_city]
            )
            .then(getResultOrEmptyArray);
    };

module.exports = {
    getUsers,
    createUsers,
};
