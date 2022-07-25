const { getUsers, createUser } = require("./user.model");
const { getUsers, createUsers, updateUser } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUserService = (user) => {
    return createUser()(user);
};

const updateUserService = (userId, user) => {
    return updateUser()(userId, user);
};

module.exports = {
    getUserService,
    createUserService,
    updateUserService,
};
