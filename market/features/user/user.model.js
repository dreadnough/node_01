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
    ({
        firstName,
        lastName,
        userPhone,
        userCity,
        userTypeAccountId,
        accountRegisteredDate,
        accountExpirationDate,
        accountBalance,
    }) => {
        return conn
            .query(
                `INSERT INTO users 
            (first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date, account_balance)
            VALUES(?,?,?,?,?,?,?,?);`,
                [
                    firstName,
                    lastName,
                    userPhone,
                    userCity,
                    userTypeAccountId,
                    accountRegisteredDate,
                    accountExpirationDate,
                    accountBalance,
                ]
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
                [firstName, lastName, userPhone, userCity, userId]
            )
            .then(getResultOrEmptyArray);
    };

module.exports = {
    getUsers,
    createUser,
    updateUser,
};
