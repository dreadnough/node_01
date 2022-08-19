const {
  getProductsByDaysService,
  getUserProductsService,
} = require("./admin.service");
const { successStatusCode } = require("../constantStatusCode");

module.exports = {
  getProductsByDays: async (req, res) => {
    const quantityDays = req.query.quantityDays;
    const data = await getProductsByDaysService(quantityDays);
    return res.status(successStatusCode).json(data);
  },
  getUserProducts: async (req, res) => {
    const userId = req.params.id;
    const data = await getUserProductsService({ userId });
    return res.status(successStatusCode).json(data);
  },
};
