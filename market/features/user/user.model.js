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

    const updateUser =
    (conn = pool) =>
    (userId, { firstName, lastName, userPhone, userCity }) => {
        return conn
            .query(
                `UPDATE users 
                SET first_name = ?, last_name = ?, user_phone = ?, user_city = ?
                WHERE user_id = ?`,
                [ firstName, lastName, userPhone, userCity, userId]
            )
            .then(getResultOrEmptyArray);
    };

module.exports = {
    getUsers,
    createUsers,
    updateUser
};
