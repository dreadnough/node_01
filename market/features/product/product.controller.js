const {
  getProductService,
  createProductBuildMaterialService,
  deleteProductService,
  updateProductJewelryService,
  updateProductCarsService
} = require("./product.service");

const { successStatusCode } = require("../constantStatusCode");

module.exports={ 

  getProducts: async (req, res) => {
    const data = await getProductService();
    return res.status(successStatusCode).json(data);
  },

  createProduct: async (req, res) => {
    const { ...productInfo } = req.body;
    const data = await createProductBuildMaterialService(productInfo);
    return res.status(successStatusCode).json({ productId: data});
  },

  deleteProduct: async (req, res) => {
    const productId = req.params.id;
    await deleteProductService({ productId });
    return res.status(successStatusCode).json({ productId });
  },

  updateProductJewelry: async (req, res) => {
    await updateProductJewelryService(req.params.id, req.body);
    return res.status(successStatusCode).json({ productId: req.params.id });
  },

  updateProductCars: async (req, res) => {
    await updateProductCarsService(req.params.id, req.body);
    return res.status(successStatusCode).json({ productId: req.params.id });
  }

};
