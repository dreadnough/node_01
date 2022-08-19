const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  findUserById,
  findUserByParameters,
  getProducts,
  getProductsWidthType,
  selectCityUser,
  selectUsersWithNoNewProducts,
  selectProductsFromUsersWithNoNewProducts,
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

const findUserParametersService = (userFilteringParameters) => {
  return findUserByParameters()(userFilteringParameters);
};

const selectCityUserService = (city) => {
  return selectCityUser()(city);
};

const getUsersProduct = () => {
  return getProducts()();
};

const getUsersByTypeWidthProduct = (type) => {
  return getProductsWidthType()(type);
};

const selectUsersWithNoNewProductsService = (user) => {
  return selectUsersWithNoNewProducts()(user);
};

const selectProductsFromUsersWithNoNewProductsService = (product) => {
  return selectProductsFromUsersWithNoNewProducts()(product);
};

module.exports = {
  getUserService,
  createUserService,
  deleteUserService,
  updateUserService,
  findUserService,
  getUsersProduct,
  getUsersByTypeWidthProduct,
  findUserParametersService,
  selectCityUserService,
  selectUsersWithNoNewProductsService,
  selectProductsFromUsersWithNoNewProductsService,
};
