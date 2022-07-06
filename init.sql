CREATE DATABASE market;
USE market;

CREATE TABLE users(
   user_id INT NOT NULL AUTO_INCREMENT,
   fisrtname VARCHAR (25) NOT NULL,
   lastname VARCHAR (25) NOT NULL,
   phone INT NOT NULL,
   city VARCHAR (30) NOT NULL,
   PRIMARY KEY (user_id)
);

CREATE TABLE user_type_accounts(
   user_type_account_id INT NOT NULL AUTO_INCREMENT,
   user_type_account VARCHAR (50) NOT NULL, 
   quantity INT NOT NULL, 
   PRIMARY KEY (user_type_account_id)
);

CREATE TABLE accounts_types (
   account_type_id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   user_type_account INT NOT NULL,
   account_registered_date DATE NOT NULL,
   user_expiration_date DATE NOT NULL,
   balance INT NULL,
   PRIMARY KEY (account_type_id),
   FOREIGN KEY (user_id) REFERENCES users(user_id),
   FOREIGN KEY (user_type_account) REFERENCES user_type_accounts(user_type_account_id)
);
    
CREATE TABLE goods_types(
   goods_id INT NOT NULL AUTO_INCREMENT,
   goods_type VARCHAR (50) NOT NULL,
   PRIMARY KEY (goods_id)
);

CREATE TABLE products (
   product_id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(50) NOT NULL,
   product_price INT NOT NULL,
   product_type INT NOT NULL,
   user_id INT NOT NULL,
   location VARCHAR(25),
   quantity INT,
   product_description TEXT NOT NULL, 
   PRIMARY KEY (product_id),
   FOREIGN KEY (user_id) REFERENCES users (user_id),
   FOREIGN KEY (product_type) REFERENCES goods_types (goods_id)
);

CREATE TABLE orders (
   order_id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   product_id INT NOT NULL,
   promotion_start DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   promotion_end DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (order_id),
   FOREIGN KEY(user_id) REFERENCES users (user_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id)
);

CREATE TABLE comments(
   comment_id INT AUTO_INCREMENT, 
   product_id  INT NOT NULL,
   comment_text VARCHAR(100) NOT NULL,
   user_id  INT NOT NULL,
   PRIMARY KEY(comment_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id)
);
    
CREATE TABLE likes(
   like_id INT NOT NULL AUTO_INCREMENT,
   comment_id INT NOT NULL,
   user_id INT NOT NULL,
   PRIMARY KEY(like_id),
   FOREIGN KEY(comment_id) REFERENCES comments(comment_id),
   FOREIGN KEY(user_id) REFERENCES users (user_id)
);

