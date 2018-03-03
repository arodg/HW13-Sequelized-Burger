DROP DATABASE IF EXISTS sequelBurgers_db;
CREATE DATABASE sequelBurgers_db;

USE sequelBurgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(25) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
