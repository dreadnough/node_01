CREATE DATABASE new_database;
USE new_database;

CREATE TABLE books(
    title VARCHAR (60) NOT NULL,
    price INT NOT NULL,
    author VARCHAR(50) NOT NULL,
    year INT NOT NULL
);

CREATE TABLE actors(
    firstname VARCHAR (25) NOT NULL,
    lastname VARCHAR (25)NOT NULL,
    age INT NOT NULL,
    nationality VARCHAR (25)NOT NULL
);

CREATE TABLE movies(
    title VARCHAR(60) NOT NULL,
    genre VARCHAR(30) NOT NULL,
    director VARCHAR(60) NOT NULL,
    release_year INT NOT NULL,PRIMARY KEY(title));


INSERT INTO books 
VALUES ("Tom Jones", 350.00, "Henry Fielding", 1749), 
    ("Underworld", 400.00, "JM Coetzee", 1999), 
    ("Amongst Women", 300.00, "John McGahern", 1990),
    ("The Adventures of Tom Sawyer", 150.00, "Mark Twain", 1876),
    ("Stories of Motherhood", 330.00, "Alice Munro", 2012);

INSERT INTO actors
VALUES ("Tom", "Cruise", 60, "American"),
    ("Dwayne", "Jhonson", 50, "American"),
    ("Chris", "Hemsworth", 53, "Australian"),
    ("Will", "Smith", 60, "American"),
    ("Henry", "Cavill", 39, "British");

INSERT INTO movies 
VALUES ("Joker", "psychological thriller", "Todd Phillips", 2019),
("Avengers: Infinity War", "superheroes", "Anthony Russo, Joe Russo", 2018),
("Furious 7", "action", "James Wan", 2015),
("The Lion King", "musical drama", "Jon Favreau", 2019),
("Jurassic World", "action", "Colin Trevorrow", 2015);



--START HomeWork Alex Melnyk

-- CREATE TABLE

CREATE TABLE user_info (
	name_user VARCHAR(100) NOT NULL,
	age_user INT(11) NOT NULL,
	country_user TEXT NOT NULL  
);

CREATE TABLE problems_info (
	names_problems VARCHAR(100) NOT NULL,
	deskription_problems TEXT NOT NULL
);

CREATE TABLE programming_date (
	name_language VARCHAR(100) NULL DEFAULT '',
	years_experience SMALLINT(11) NULL DEFAULT NULL,
	year_start TINYINT(11) NULL DEFAULT NULL
);


-- INSERT

INSERT INTO user_info (name_user, age_user, country_user) 
VALUES ("Alex", 25, "Ukraine"),
("Ivan", 21, "Ukraine"),
("Inna", 31, "Ukraine"),
("Vlad", 27, "Ukraine"),
("Illia", 23, "Ukraine");

INSERT INTO programming_date (name_language, years_experience, year_start) 
VALUES ("JavaScript", 2, 20),
("Python", 1, 22),
("C#",5, 17),
("Rust", 1, 21),
("C++", 12, 10);

INSERT INTO problems_info (names_problems, deskription_problems) 
VALUES ("screen breakage", "the screen is cracked and does not work"),
("touchpad", "not work"),
("screen breakage", "the screen is cracked and does not work"),
("touchpad", "not work"),
("screen breakage", "the screen is cracked and does not work");

-- End HomeWork Alex Melnyk

-- Andriy Voitiv homework start

-- -----------------------------------------------------
-- Table `accounts`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `user` (name, surname, age, city)
VALUES 
	("Petro", "Hanchuk", 35, "Ternava"),
    ("Taras", "Maryniak", 24, "Sambir"),
    ("Andriy", "Kis", 25, "Kniazhpil"),
    ("Ivan", "Medvid", 45, "Dobromyl"),
    ("Petro", "Bac", 29, "Kropyvnyk");

-- -----------------------------------------------------
-- Table `accounts`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO product (name, description, price)
values 
	("Carrot", "From village", 40),
    ("Apple", "From garden", 12),
    ("Cucumber", "with GMO", 10),
    ("Strawbery", "From Olas garden", 70),
    ("Watermelon", "From Herson", 50);

-- -----------------------------------------------------
-- Table `accounts`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `purchaseDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT FK_order_user FOREIGN KEY (userId) REFERENCES `user`(id)
) ENGINE = InnoDB;

INSERT INTO `order` (purchaseDate, userId)
VALUES 
	(NOW(), 1),
    (NOW(), 2),
    (NOW(), 3),
    (NOW(), 1),
    (NOW(), 2);

-- -----------------------------------------------------
-- Table `accounts`.`order_product`
-- -----------------------------------------------------
CREATE TABLE `order_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NOT NULL,
  `orderId` INT NOT NULL,
  `quantity` INT NOT NULL,
  `productPrice` DECIMAL(10) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT FK_orderProduct_order FOREIGN KEY (orderId) REFERENCES `order`(id),
  CONSTRAINT FK_orderProduct_product FOREIGN KEY (productId) REFERENCES `product`(id)
) ENGINE=InnoDB;

INSERT INTO `order_product` (orderId, productId, quantity, productPrice)
VALUES 
	(1, 1, 2, 40),
	(1, 2, 1, 12),
	(2, 5, 1, 50),
	(3, 4, 4, 70),
	(4, 3, 3, 10),
    (5, 3, 1, 10);

 -- Andriy Voitiv homework finish
