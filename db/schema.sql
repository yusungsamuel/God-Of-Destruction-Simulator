CREATE DATABASE dragonBallSuper_db;

USE dragonBallSuper_db;

CREATE TABLE characters (
    id INT AUTO_INCREMENT,
    PRIMARY KEY(id),
    name VARCHAR(100) NOT NULL,
    destroyed BOOLEAN DEFAULT false
);