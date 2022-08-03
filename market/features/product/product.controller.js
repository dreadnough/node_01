const {getProductService} = require("./product.service");
const { successStatusCode } = require("../constantStatusCode");

module.exports={ 
  getProducts: async (req, res) => {
    const data = await getProductService();
    return res.status(successStatusCode).json(data);
  }};