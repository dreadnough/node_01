SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS zvirko_v DEFAULT CHARACTER SET utf8;
USE zvirko_v ;
-- -----------------------------------------------------
-- Table `zvirko_v`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Customer (
  cust_id INT NOT NULL AUTO_INCREMENT,
  cname VARCHAR(30) NOT NULL,
  PRIMARY KEY (cust_id))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `zvirko_v`.`Orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Orders (
  cust_id INT NOT NULL,
  order_id INT NOT NULL,
  summ INT NOT NULL,
  ord_time DATE NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (cust_id)REFERENCES Customer(cust_id))
  ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `zvirko_v`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Products (
  pr_id INT NOT NULL AUTO_INCREMENT,
  pr_name VARCHAR(50) NOT NULL,
  pr_price INT NOT NULL,
  PRIMARY KEY (pr_id))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
