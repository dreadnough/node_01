-- Andriy Voitiv homework start

USE new_database;

SELECT * from books
LEFT JOIN user
ON user.id=books.user_id;

SELECT * from books
INNER JOIN user
ON user.id=books.user_id
WHERE books.user_id=1;

SELECT * from books
RIGHT JOIN user
ON user.id=books.user_id
WHERE books.id=2;

-- Andriy Voitiv homework finish

-- Alex Melnyk homework start

SELECT * FROM product 
LEFT JOIN viewers 
ON product.id=viewers.idvw;

SELECT * FROM user 
RIGHT JOIN proj 
ON user.id=proj.project_id;

SELECT * FROM streets 
INNER JOIN book_tikets 
ON streets.city=book_tikets.destination;

SELECT * FROM films 
CROSS JOIN projects 
ON films.idfm=projects.project_id;

-- Alex Melnyk homework finish

-- Sofiia Madryha homework start
SELECT movies.movies_id, movies.title, viewers.vw_name
FROM movies 
INNER JOIN viewers 
ON movies.movies_id = viewers.idvw;
  
SELECT  p.pr_name, p.pr_price, b.title
FROM products AS p
LEFT JOIN books AS b
ON b.price = p.pr_price;

SELECT d.dir_name, d.id_suname, d.dir_age, a.age
FROM actors AS a
RIGHT JOIN directors AS d
ON a.age = d.dir_age;

SELECT b.title, b.price, c.cust_id
FROM books AS b 
CROSS JOIN customers AS c
ON b.user_id = c.cust_id;
-- Sofiia Madryha homework finish

-- Yana Honchar homework start

SELECT * FROM programming_date
RIGHT JOIN films
ON programming_date.years_experience=films.idfm;

SELECT * FROM films
LEFT JOIN viewers
ON films.idfm=viewers.idvw;

SELECT * FROM product
INNER JOIN user
ON product.id=user.id;

SELECT * FROM product
INNER JOIN user
ON product.id=user.id;

-- Yana Honchar homework finish

-- Polina Nizhynska homework start
SELECT tennis.player_level, tennis.age, directors.dir_name, directors.id_suname
FROM tennis
INNER JOIN directors
ON tennis.player_level=directors.iddir;

SELECT * FROM programming_date 
LEFT JOIN tennis 
ON programming_date.year_start=tennis.age;

SELECT * FROM directors 
RIGHT JOIN films 
ON directors.iddir=films.idfm;
-- Polina Nizhynska homework finish

-- Volodymyr Zaritskyi homework start

SELECT * FROM customers 
INNER JOIN order_product 
ON customers.cust_id=order_product.id;

SELECT * FROM product 
INNER JOIN user 
ON product.id=user.id;

SELECT * FROM actors 
LEFT JOIN films
ON actors.actors_id=films.idfm;

-- Volodymyr Zaritskyi homework end

-- Volodymyr Zvirko homework start

SELECT dir_name
 FROM directors
RIGHT JOIN films 
ON films.idfm=directors.dir_name;

SELECT * FROM taxes 
INNER JOIN book_tikets 
ON taxes.your_name=book_tikets.your_name;

SELECT * FROM actors 
LEFT JOIN films
ON actors.firstname=films.fm_name; 

-- -------------------------------

SELECT actors_id
FROM actors
GROUP BY nationality
HAVING nationality="American";

SELECT player_level
FROM tennis
GROUP BY player_level
HAVING player_level>2;

SELECT books.price, SUM(price) AS "price"
FROM books
GROUP BY price
HAVING price >=300;

-- Volodymyr Zvirko homework end

-- Halyna Horbiak homework start 

SELECT films.fm_name, directors.dir_name
From films LEFT OUTER JOIN directors 
ON films.idfm = directors.iddir;

SELECT films.fm_name, directors.dir_name
From directors LEFT OUTER JOIN films 
ON directors.iddir = films.idfm;

SELECT tennis.name_surname, viewers.vw_name
From tennis LEFT OUTER JOIN viewers 
ON tennis.player_level = viewers.idvw;

-- Halyna Horbiak homework finish

SELECT * FROM customers 
INNER JOIN order_product 
ON customers.cust_id=order_product.id;

SELECT * FROM product 
INNER JOIN user 
ON product.id=user.id;

SELECT * FROM actors 
LEFT JOIN films
ON actors.actors_id=films.idfm;

-- Volodymyr Zaritskyi homework end

-- Halyna Horbiak homework start 

SELECT films.fm_name, directors.dir_name
From films LEFT OUTER JOIN directors 
ON films.idfm = directors.iddir;

SELECT films.fm_name, directors.dir_name
From directors LEFT OUTER JOIN films 
ON directors.iddir = films.idfm;

SELECT tennis.name_surname, viewers.vw_name
From tennis LEFT OUTER JOIN viewers 
ON tennis.player_level = viewers.idvw;

-- Halyna Horbiak homework finish

-- Oleksandr Melnyl homework start (GROUP BY and HAVING)
SELECT product.price 
FROM product 
WHERE price>20 
GROUP BY price;

SELECT price, COUNT(price) 
AS count_number 
FROM ice_cream 
GROUP BY price;

SELECT directors.dir_age 
AS age 
FROM directors 
GROUP BY dir_age 
HAVING age<70;

SELECT orders.summ 
AS ord_date 
FROM orders 
GROUP BY ord_date 
HAVING ord_date>=20 AND ord_date<=35;  

SELECT taxes.income 
AS income 
FROM taxes 
GROUP BY income 
HAVING income>=50000 OR income=30000;

-- Oleksandr Melnyl homework finish (GROUP BY and HAVING)

-- Sofiia Madryha homework start(GROUP BY and HAVING)

SELECT user_id, MAX(year) AS "The latest book"
FROM books
GROUP BY user_id;

SELECT gender, COUNT(*) AS "count"
FROM tennis
GROUP BY gender;

SELECT movies.title
FROM movies
WHERE release_year > 2015
GROUP BY release_year;

SELECT ice_cream.seller, SUM(price) AS sum
FROM ice_cream
GROUP BY seller
HAVING sum>=150;

SELECT order_product.product_price, SUM(quantity) AS "quantity"
FROM order_product
GROUP BY product_price
HAVING quantity >=0;

-- Sofiia Madryha homework finish (GROUP BY and HAVING)
