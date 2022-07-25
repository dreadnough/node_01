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

const createUser =
    (conn = pool) =>
    ({ firstName, lastName, userPhone, userCity }) => {
        return conn
            .query(
                `INSERT INTO users 
            (first_name, last_name, user_phone, user_city)
            VALUES(?,?,?,?);`,
                [firstName, lastName, userPhone, userCity]
            )
            .then(getResultOrEmptyArray);
    };

module.exports = {
    getUsers,
    createUser,
};
