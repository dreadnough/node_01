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

-- Start homework Polina Nizhynska
CREATE TABLE Streets (
    Coutry varchar(30),
    City varchar(30),
    StreetName varchar(30)
);
CREATE TABLE Taxes (
    YourName varchar(30),
    Surname varchar(30),
    Resedents varchar(30),
    Ocupation varchar(30),
	Income int
);
CREATE TABLE BookTikets (
    YourName varchar(30),
    Surname varchar(30),
    Departure varchar(30),
    Destination varchar(30)
);

insert into BookTikets values 
("Volodymyr", "Ivanov", "Lviv", "Ternopil"),
("Vitaliy", "Selyshyn", "Gdansk", "Poznan"),
("Olexandr", "Semenyk", "Berlin", "Katovice"), 
("Sergiy", "Melnyk", "Chernivtsi", "Lviv"),
("Anatoliy", "Mosiychyk", "Ivano-Frankivsk", "Peremyshl");

insert into Streets values 
("Ukraine", "Lviv", "Kopernyka"),
("Ukraine", "Uzgorod", "Shevchenka"),
("Poland", "Warsaw", "Żelazna"), 
("Germany", "Berlin", "Schröderstraße"),
("France", "Paris", "Rue de Rivoli"); 

insert into Taxes values 
("Ivan", "Zadoroznyy", "Accounter", "Ukraine", 50000),
("Max", "Stepanovych", "Developer", "Ukraine", 40000),
("Volodymyr", "Kuziz", "Analyst","Ukraine", 100000), 
("Anton", "Marchyk", "Backer", "Ukraine", 30000),
("Mark", "Nechuy", "Manager","Ukraine", 40000);

-- End homework Polina Nizhynska






