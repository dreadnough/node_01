const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  findUserById,
  getProducts,
  getProductsWidthType,
} = require("./user.model");

const getUserService = () => {
  return getUsers()();
};

const createUserService = (user) => {
  return createUser()(user);
};

const deleteUserService = (userId) => {
  return deleteUser()(userId);
};

const updateUserService = (userId, user) => {
  return updateUser()(userId, user);
};

const findUserService = (userId) => {
  return findUserById()(userId);
};

const getUsersProduct = () => {
  return getProducts()();
};

const getUsersByTypeWidthProduct = (type) => {
  return getProductsWidthType()(type);
};

module.exports = {
  getUserService,
  createUserService,
  deleteUserService,
  updateUserService,
  findUserService,
  getUsersProduct,
  getUsersByTypeWidthProduct,
};
