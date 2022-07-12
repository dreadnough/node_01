const { getUsers } = require("./user.model");

const getUserService = () => {
    return getUsers()();
}

module.exports = {
    getUserService
};