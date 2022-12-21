DROP TABLE IF EXISTS account;


CREATE TABLE account(
user_id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
email TEXT,
username TEXT
);

INSERT INTO account (first_name, last_name, email, username) VALUES ('Patric', 'Swindell', 'example.email@gmail.com', 'PSwin');
INSERT INTO account (first_name, last_name, email, username) VALUES ('Vanessa', 'Swindell', 'example.email@gmail.com', 'VSwin');
INSERT INTO account (first_name, last_name, email, username) VALUES ('Lexy', 'Swindell', 'example.email@gmail.com', 'LSwin');
INSERT INTO account (first_name, last_name, email, username) VALUES ('Patric Jr.', 'Swindell', 'example.email@gmail.com', 'PJSwin');
INSERT INTO account (first_name, last_name, email, username) VALUES ('Levi', 'Swindell', 'example.email@gmail.com', 'L2Swin');




