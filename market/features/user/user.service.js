const { getUsers, createUser } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUserService = (user) => {
    return createUser()(user);
};

module.exports = {
    getUserService,
    createUserService,
};
