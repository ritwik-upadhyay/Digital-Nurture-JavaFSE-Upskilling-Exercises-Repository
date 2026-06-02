CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    account_holder VARCHAR(50),
    balance DOUBLE
);

INSERT INTO accounts VALUES
(1, 'Ritwik', 5000),
(2, 'Megha', 3000);