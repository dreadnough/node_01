const {
  getProductService,
  createProductBuildMaterialService,
  getProductById,
} = require("./product.service");
const { successStatusCode } = require("../constantStatusCode");

module.exports = {
  getById: async (req, res) => {
    const productId = req.params.id;
    const data = await getProductById(productId);
    return res.status(successStatusCode).json(data);
  },
  getProducts: async (req, res) => {
    const data = await getProductService();
    return res.status(successStatusCode).json(data);
  },
  createProduct: async (req, res) => {
    const { ...productInfo } = req.body;
    const data = await createProductBuildMaterialService(productInfo);
    return res.status(successStatusCode).json({ productId: data });
  },
};
