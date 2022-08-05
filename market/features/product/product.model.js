const pool = require("../../mysql/mysqlPools").depotPool;
const {
  getResultOrEmptyArray,
  getSingleResultOrEmptyObj,
} = require("../utils/mysql-helper");

const getProducts = (conn = pool) => () => {
    return conn
      .query(
        `
        SELECT * FROM products
      `
      )
      .then(getResultOrEmptyArray);
  };

  const createProduct = (conn = pool) => ({
    productName,
    productPrice,
    userId, 
    goodsId,
    productLocation, 
    productQuantity, 
    productDescription, 
    productCreateDate
  }) => {
    return conn
      .query( 
        `INSERT INTO products (product_name, product_price,goods_id, user_id, product_location, product_quantity, 
        product_description, product_create_date)
        VALUES(?,?,?,?,?,?,?,?);`,
        [
        productName,
        productPrice,
        goodsId,
        userId, 
        productLocation, 
        productQuantity, 
        productDescription, 
        productCreateDate
        ]
      )
      .then(getResultOrEmptyArray)
    }
  const createProductBuildMaterial = (conn = pool) => (
    insertId,
    {
    typeMaterial,
    origin
  }) => {
    return conn
      .query( 
       
      `INSERT INTO category_building_materials(product_id, type_material, origin, goods_id)
        VALUES(?,?,?,?);`,
        [
          insertId,
          typeMaterial,
          origin,
          3
        ]
      )
      .then(getResultOrEmptyArray)
    }

    const updateProductCars = (conn = pool) => (
      carId,{ carType, carBody, engineCapacity, Age, Mileage 
      }) => {
        return conn
          .query( `UPDATE category_cars
          SET car_type = ?, car_body = ?, engine_capacity = ?, age = ?, mileage = ?
          WHERE category_car_id = ?`,
          [carId, carType, carBody, engineCapacity, Age, Mileage ]
          )
          .then(getResultOrEmptyArray)
    }

module.exports={
  getProducts, 
  createProduct,
  createProductBuildMaterial,
  updateProductCars
};