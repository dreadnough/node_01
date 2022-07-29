const { getUsers, createUser, updateUser, findUserById, selectCityUser } = require("./user.model");

const getUserService = () => {
    return getUsers()();
};

const createUserService = (user) => {
    return createUser()(user);
};

const updateUserService = (userId, user) => {
    return updateUser()(userId, user);
};

const findUserService = (userId) => {
    return findUserById()(userId);
};

const selectCityUserService = (city) => {
    return selectCityUser()(city);
};

module.exports = {
    getUserService,
    createUserService,
    updateUserService,
    findUserService,
    selectCityUserService
};
