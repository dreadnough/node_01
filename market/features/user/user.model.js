const pool = require("../../mysql/mysqlPools").depotPool;
const { getResultOrEmptyArray,getSingleResultOrEmptyObj} = require("../utils/mysql-helper");


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

const updateUser =
    (conn = pool) =>
    (userId, { firstName, lastName, userPhone, userCity, userTypeAccountId, accountRegisteredDate, accountExperatioDate, accountBalance}) => {
        return conn
            .query(
                `UPDATE users 
                SET first_name = ?, last_name = ?, user_phone = ?, user_city = ?, user_type_account_id = ?,
                account_registered_date = ?, account_expiration_date = ?, account_balance =?
                WHERE user_id = ?`,
                [firstName, lastName, userPhone, userCity,userTypeAccountId, accountRegisteredDate, accountExperatioDate, accountBalance, userId]
            )
            .then(getResultOrEmptyArray);
    };

const findUserById = 
(conn = pool) =>
(userId) => {
    return conn
        .query(
            `SELECT user_id AS userID, first_name AS firstName, last_name AS lastName, user_phone AS userPhone, 
            user_city AS userCity,  user_type_account_id AS userTypeAccountId, account_balance AS accountBalance
            FROM users
            WHERE user_id = ?`,
            [userId]
        )
        .then(getSingleResultOrEmptyObj);
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    findUserById,
};
