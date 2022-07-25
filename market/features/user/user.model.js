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

    const deleteUsers = 
    (conn = pool) =>
    (userId, { firstName, lastName, userPhone, userCity }) => {
        return conn
            .query(
                `IF EXISTS (SELECT * FROM users WHERE user_id = ?)
                DROP USER [user_id]
                DELETE first_name FROM users WHERE first_name= ?;
                DELETE last_name FROM users WHERE last_name= ?;
                DELETE user_phone FROM users WHERE user_phone= ?;
                DELETE user_city FROM users WHERE user_city= ?;`,
                [firstName, lastName, userPhone, userCity, userId]
            )
            .then(getResultOrEmptyArray);
    };
    
module.exports = {
    getUsers,
    createUsers,
    deleteUsers,
};
