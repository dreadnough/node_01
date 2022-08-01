const {
  getUserService,
  createUserService,
  updateUserService,
  findUserService,
  findUserParametersService,
  getUsersProduct,
  getUsersByTypeWidthProduct,
  selectCityUserService,
} = require("./user.service");

const { successStatusCode } = require("../constantStatusCode");

module.exports = {
  getUsers: async (req, res) => {
    const data = await getUserService();
    return res.status(successStatusCode).json(data);
  },
  createUser: async (req, res) => {
    const { ...userInfo } = req.body;
    const data = await createUserService(userInfo);
    return res.status(successStatusCode).json({ userId: data.insertId });
  },
  updateUser: async (req, res) => {
    /* eslint-disable */
    const data = await updateUserService(req.params.id, req.body);
    /* eslint-enable */
    return res.status(successStatusCode).json({ userId: req.params.id });
  },
  findUserById: async (req, res) => {
    const data = await findUserService(req.params.id);
    return res.status(200).json(data);
  },
  findUserByParameters: async (req, res) => {
    const { ...userFilteringParameters } = req.query;
    const data = await findUserParametersService(userFilteringParameters);
    return res.status(successStatusCode).json(data);
  },
  getUsersProduct: async (req, res) => {
    const data = await getUsersProduct();
    return res.status(successStatusCode).json(data);
  },
  getUsersByTypeWidthProduct: async (req, res) => {
    const data = await getUsersByTypeWidthProduct(req.params.type);
    return res.status(successStatusCode).json(data);
  },
  selectCityUser: async (req, res) => {
    const { city } = req.query;
    const data = await selectCityUserService(city);
    return res.status(successStatusCode).json(data);
  },
};
