const { getUsers, createUsers, deleteUsers } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUsersService = (user) => {
    return createUsers()(user);
};

const deleteUsersService = (userId, user) => {
    return deleteUsers()(userId, user);
};

module.exports = {
    getUserService,
    createUsersService,
    deleteUsersService,
};
