-- Homework start Alex Melnyk (update table users and products)

UPDATE users 
SET first_name="Oleksandr", user_city="Lviv"
WHERE user_id=1;

UPDATE products
SET product_name="Ford Focus", product_price=9000, product_quantity=1, product_description="A car with a mileage of 50 thousand kilometers"
WHERE product_id=1;

-- Homework end Alex Melnyk

-- Homework start Sofiia Madryha (update table users and products)

UPDATE users 
SET user_phone = "0673468000"
WHERE user_id=3;

UPDATE products
SET product_quantity = 3
WHERE product_id=3;

-- Homework end Sofiia Madryha

-- Homework start Horbiak Halyna

UPDATE users 
SET first_name="Halia", last_name="Horbyak" 
WHERE user_id=4;

UPDATE products
SET product_price=1200, product_quantity=1
WHERE product_id=4;

-- Homework end Halyna Horbiak

-- Homework start Yana Honchar
UPDATE users 
SET first_name="Yana", last_name="Honchar" 
WHERE user_id=2;

UPDATE products
SET product_price=2500, product_quantity=2
WHERE product_id=2;
-- Homework Yana Honchar

-- Hw start Volodymyr Zvirko

UPDATE users 
SET last_name = "Zwirko"
WHERE user_id=6;

UPDATE products
SET product_description = "straight from the 80's"
WHERE product_id=6;

-- Hw end Volodymyr Zvirko