-- Andriy Voitiv homework start(GROUP BY and HAVING) 

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

USE accounts;

SELECT * FROM user 
GROUP BY name 
HAVING name="Andriy";

USE accounts;

SELECT age 
FROM user 
GROUP BY age 
HAVING age>=29;

USE new_database;

SELECT price, SUM(price) 
AS sum
FROM books
GROUP BY price
HAVING sum>=300;

-- Andriy Voitiv homework finish (GROUP BY and HAVING)