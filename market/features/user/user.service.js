const { getUsers, createUsers, deleteUser } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUsersService = (user) => {
    return createUsers()(user);
};

const deleteUserService = (userId) => {
    return deleteUser()(userId);
};

module.exports = {
    getUserService,
    createUsersService,
    deleteUserService,
};
