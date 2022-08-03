const {getProducts} = require("./product.model");


const getProductService = () => {
    return getProducts()();
  };
module.exports={getProductService};