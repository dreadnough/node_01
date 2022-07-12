-- Global insert for table user_type_accounts and goods_types
INSERT INTO user_type_accounts (user_type_account, quantity)
VALUES ("base", 1),
("silver", 2),
("gold", 3),
("platinum", 5);

INSERT INTO goods_types (goods_type) 
VALUES ("Car"),
("Jewelry"),
("Building materials");


-- Start homework Alex Melnyk

INSERT INTO users(first_name, last_name, user_phone, user_city) 
VALUES ("Alex", "Melnyk", 0955555555, "Kyiv");

INSERT INTO account_types (user_id, user_type_account_id, account_registered_date, account_expiration_date, account_balance)
VALUES (1, 2, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), 0);

INSERT INTO products (product_name, product_price, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Ford Fiesta", 7000, 1, 1, "Lviv", 2, "New car", NOW());

-- Finish homework Alex Melnyk

-- Start homework Yana Honchar

INSERT INTO users(first_name, last_name, user_phone, user_city) 
VALUES ("Yana", "Honchar", 0639999999, "Georgia");

INSERT INTO account_types (user_id, user_type_account_id, account_registered_date, account_expiration_date, account_balance)
VALUES (2, 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), 0);

INSERT INTO products (product_name, product_price, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Toyota Camry", 15000, 1, 2, "Kyiv", 1, "New car Toyota Camry", NOW());

-- Finish homework Yana Honchar

-- Start homework Sofiia Madryha

INSERT INTO users(first_name, last_name, user_phone, user_city) 
VALUES ("Sofiia", "Madryha", 0673400000, "Ivano-Frankivsk");

INSERT INTO account_types (user_id, user_type_account_id, account_registered_date, account_expiration_date, account_balance)
VALUES (3, 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), 0);

INSERT INTO products (product_name, product_price, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Pandora Diamond Ring", 5000, 2, 3, "Horodenka", 3, "A solid 14k white gold ring hand set with a 0.50 carat lab-created diamond.", NOW());
 -- Finish homework Sofiia Madryha



