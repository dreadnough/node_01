const { getUsers, createUsers } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUsersService = (user) => {
    return createUsers()(user);
};

module.exports = {
    getUserService,
    createUsersService,
};
