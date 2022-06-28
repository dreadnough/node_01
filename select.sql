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
