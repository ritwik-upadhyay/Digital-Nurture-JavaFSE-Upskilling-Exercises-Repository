CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

INSERT INTO students VALUES
(1, 'Ritwik', 21),
(2, 'Megha', 20),
(3, 'Taylor', 35);