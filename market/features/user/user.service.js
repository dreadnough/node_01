const { getUsers, createUsers,updateUser } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUsersService = (user) => {
    return createUsers()(user);
};

const updateUserService = (userId, user) => {
    return updateUser()(userId, user);
}

module.exports = {
    getUserService,
    createUsersService,
    updateUserService
};
