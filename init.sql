CREATE DATABASE market;
USE market;

CREATE TABLE comments(
    comment_id INT AUTO_INCREMENT, 
    product_id VARCHAR(100) NOT NULL,
    comment_text DATE, -- текст слово склюелю тому поставила комент текст!!!!
    user_id DATE,
    PRIMARY KEY(comment_id)
);