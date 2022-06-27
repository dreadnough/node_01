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



-- START HomeWork Alex Melnyk

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

-- Start homework Polina Nizhynska
CREATE TABLE streets (
    country varchar(30),
    city varchar(30),
    street_name varchar(30)
);
CREATE TABLE taxes (
    your_name varchar(30),
    surname varchar(30),
    resedents varchar(30),
    ocupation varchar(30),
	income int
);
CREATE TABLE book_tikets (
    your_name varchar(30),
    surname varchar(30),
    departure varchar(30),
    destination varchar(30)
);

insert into book_tikets values 
("Volodymyr", "Ivanov", "Lviv", "Ternopil"),
("Vitaliy", "Selyshyn", "Gdansk", "Poznan"),
("Olexandr", "Semenyk", "Berlin", "Katovice"), 
("Sergiy", "Melnyk", "Chernivtsi", "Lviv"),
("Anatoliy", "Mosiychyk", "Ivano-Frankivsk", "Peremyshl");

insert into streets values 
("Ukraine", "Lviv", "Kopernyka"),
("Ukraine", "Uzgorod", "Shevchenka"),
("Poland", "Warsaw", "Zelazna"), 
("Germany", "Berlin", "Schroderstrasse"),
("France", "Paris", "Rue de Rivoli"); 

insert into taxes values 
("Ivan", "Zadoroznyy", "Accounter", "Ukraine", 50000),
("Max", "Stepanovych", "Developer", "Ukraine", 40000),
("Volodymyr", "Kuziz", "Analyst","Ukraine", 100000), 
("Anton", "Marchyk", "Backer", "Ukraine", 30000),
("Mark", "Nechuy", "Manager","Ukraine", 40000);

-- End homework Polina Nizhynska

-- -----------------------------------------------------
-- Start homework Zaritsky Volodymyr
-- -----------------------------------------------------
CREATE TABLE viewers (
  `idvw` INT NOT NULL AUTO_INCREMENT,
  `vw_name` VARCHAR(45) NOT NULL,
  `vw_age` INT NOT NULL,
  PRIMARY KEY (`idvw`));


CREATE TABLE films (
  `idfm` INT NOT NULL AUTO_INCREMENT,
  `fm_name` VARCHAR(45) NOT NULL,
  `fm_rating` INT NOT NULL,
  PRIMARY KEY (`idfm`));


CREATE TABLE directors (
  `iddir` INT NOT NULL AUTO_INCREMENT,
  `dir_name` VARCHAR(45) NOT NULL,
  `id_suname` VARCHAR(45) NOT NULL,
  `dir_city` VARCHAR(45) NOT NULL,
  `dir_age` INT NOT NULL,
  PRIMARY KEY (`iddir`));


INSERT INTO films 
VALUES (1, "Tenet", 8),
(2, "Schindler's List", 9),
(3, "Pulp Fiction", 9),
(4, "Avatar", 8),
(5, "Star Wars: Episode IV - A New Hope", 9);


INSERT INTO viewers 
VALUES (1, "Ivan228", 13),
(2, "OlehMaxno", 23),
(3, "Bondageman", 19),
(4, "Alezx", 18),
(5, "pan_mykhailo", 59);


INSERT INTO  directors
VALUES (1, "Christopher", "Nolan", "London", 51),
(2, "Quentin", "Tarantino", "Knoxville", 59),
(3, "George", "Lucas", "Modesto", 78),
(4, "Steven", "Spielberg", "Cincinnati", 75),
(5, "James", "Cameron", "Kapuskasing", 67);

-- -----------------------------------------------------
-- End homework Zaritsky Volodymyr
-- -----------------------------------------------------

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
  `purchase_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

INSERT INTO `order` (purchase_date, user_id)
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
  `product_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `product_price` DECIMAL(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

INSERT INTO `order_product` (order_id, product_id, quantity, product_price)
VALUES 
	(1, 1, 2, 40),
	(1, 2, 1, 12),
	(2, 5, 1, 50),
	(3, 4, 4, 70),
	(4, 3, 3, 10),
  (5, 3, 1, 10);

 -- Andriy Voitiv homework finish
 
 -- Halyna Horbiak homework start
 CREATE TABLE projects(
    project_id INT AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    start_date DATE,
    end_date DATE,
    PRIMARY KEY(project_id)
);
INSERT INTO 
    projects(name, start_date, end_date)
VALUES
    ('rse','2019-08-01','2019-12-31'),
    ('frs','2019-05-15','2019-11-20'),
    ('fdas','2019-05-15','2019-11-20'),
    ('fsda','2019-05-15','2019-11-20'),
    ('fdh','2019-05-15','2019-11-20');

CREATE TABLE proj(
    project_id INT AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    start_date DATE,
    end_date DATE,
    PRIMARY KEY(project_id)
);
INSERT INTO 
    proj(name, start_date, end_date)
VALUES
    ('rse','2019-08-01','2019-12-31'),
    ('frs','2019-05-15','2019-11-20'),
    ('fdas','2019-05-15','2019-11-20'),
    ('fsda','2019-05-15','2019-11-20'),
    ('fdh','2019-05-15','2019-11-20');
CREATE TABLE pro(
    project_id INT AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    start_date DATE,
    end_date DATE,
    PRIMARY KEY(project_id)
);
INSERT INTO 
    pro(name, start_date, end_date)
VALUES
    ('rse','2019-08-01','2019-12-31'),
    ('frs','2019-05-15','2019-11-20'),
    ('fdas','2019-05-15','2019-11-20'),
    ('fsda','2019-05-15','2019-11-20'),
    ('fdh','2019-05-15','2019-11-20');
  -- Halyna Horbiak homework finished 
  
  -- Zvirko Volodymyr homework start
  -- -----------------------------------------------------
-- Table zvirko_v.Customer
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS customers (
  cust_id INT NOT NULL AUTO_INCREMENT,
  cname VARCHAR(100) NOT NULL,
  c_bonus VARCHAR(3),
  PRIMARY KEY (cust_id));
  
INSERT INTO
customers(cname, c_bonus)
VALUES
('J. Lennon', 'yes'),
('B. Marley', 'yes'),
('P. McCartney', 'no'),
('G. Ahr', 'yes'),
('C. Amick', 'no');
-- -----------------------------------------------------
-- Table zvirko_v.Orders
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
  order_id INT NOT NULL AUTO_INCREMENT,
  summ INT NOT NULL,
  ord_time DATE NOT NULL,
  PRIMARY KEY (order_id));
 
 INSERT INTO
  orders(summ, ord_time)
  VALUES
  ('19.99', '1974-08-23'),
  ('24.49', '1981-03-12'),
  ('12.60', '1979-11-28'),
  ('34.99', '2016-10-01'),
  ('49.99', '2020-04-13');
-- -----------------------------------------------------
-- Table zvirko_v.Products
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS products (
  pr_id INT NOT NULL AUTO_INCREMENT,
  pr_name VARCHAR(50) NOT NULL,
  pr_price INT NOT NULL,
  PRIMARY KEY (pr_id));
 INSERT INTO
  products(pr_name, pr_price)
  VALUES
  ('Vinil "Blue by Joni Mitchell"', '19.99'),
  ('Vini; "Born to Run by Bruce Springsteen"', '24.49'),
  ('Vinil "Unknown Pleasures by Joy Division"', '12.60'),
  ('mic "BM-800"', '34.99'),
  ('Vinil "Nevermind by Nirvana"', '49.99'); 
 -- Zvirko Volodymyr homework finished