const {
  getProductsByDays,
  getUser,
  getProductsByCategory,
} = require("./admin.model");

const getProductsByDaysService = async (quantityDays) => {
  return getProductsByDays()(quantityDays);
};

const getUserProductsService = async (userId) => {
  const user = await getUser()(userId);
  const products = await getProductsByCategory()(userId);

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      switch (currentValue[key]) {
        case 1:
          currentValue[key] = "Cars";
          break;
        case 2:
          currentValue[key] = "Jewerly";
          break;
        case 3:
          currentValue[key] = "Building Materials";
      }
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );

      return result;
    }, {});
  };

  const ProductsByCategory = groupBy(products, "goodsId");

  const count = (arr = []) => {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
      const { goodsId } = arr[i];
      if (res.hasOwnProperty(goodsId)) {
        res[goodsId]++;
      } else {
        res[goodsId] = 1;
      }
    }
    return res;
  };

  const countProducts = count(products);
  return { user, ProductsByCategory, countProducts };
};

module.exports = { getProductsByDaysService, getUserProductsService };
