const { getUsers, createUsers, updateUser, deleteUser } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUsersService = (user) => {
    return createUsers()(user);
};

const deleteUserService = (userId) => {
    return deleteUser()(userId);
};

const updateUserService = (userId, user) => {
    return updateUser()(userId, user);
}

module.exports = {
    getUserService,
    createUsersService,
    deleteUserService,
    updateUserService
};
