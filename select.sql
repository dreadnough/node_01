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