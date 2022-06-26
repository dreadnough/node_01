-- -----------------------------------------------------
-- Zaritsky Volodymyr
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viewers` (
  `idvw` INT NOT NULL AUTO_INCREMENT,
  `vw_name` VARCHAR(45) NOT NULL,
  `vw_age` INT NOT NULL,
  PRIMARY KEY (`idvw`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `films` (
  `idfm` INT NOT NULL AUTO_INCREMENT,
  `fm_name` VARCHAR(45) NOT NULL,
  `fm_rating` INT NOT NULL,
  PRIMARY KEY (`idfm`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `directors` (
  `iddir` INT NOT NULL AUTO_INCREMENT,
  `dir_name` VARCHAR(45) NOT NULL,
  `id_suname` VARCHAR(45) NOT NULL,
  `dir_city` VARCHAR(45) NOT NULL,
  `dir_age` INT NOT NULL,
  PRIMARY KEY (`iddir`))
ENGINE = InnoDB;


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
