/*
 * Upon submission, this file should contain the SQL script to initialize your database.
 * It should contain all DROP TABLE and CREATE TABLE statments, and any INSERT statements
 * required.
 */
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id integer NOT NULL PRIMARY KEY,
  username varchar(32) NOT NULL,
  password varchar(32) NOT NULL,
  fname varchar(32) NOT NULL,
  lname varchar(32) NOT NULL,
  year integer NOT NULL,
  month integer NOT NULL,
  day integer NOT NULL,
  salt varchar(32) NOT NUll,
  profile varchar(64),
  avatar varchar(32) NOT NUll,
  subscriber integer DEFAULT NULL
);

CREATE TABLE article (
  id integer NOT NULL PRIMARY KEY,
  header varchar(32) NOT NULL,
  content varchar(108) NOT NULL,
  time time NOT NULL,
  user_id integer NOT NULL,
  image varchar(32),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE likes (
  id integer NOT NULL PRIMARY KEY,
  user_id integer NOT NULL,
  article_id integer NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (article_id) REFERENCES article(id)
);

CREATE TABLE comment (
  id integer NOT NULL PRIMARY KEY,
  user_id integer NOT NULL,
  article_id integer NOT NULL,
  content varchar(108) NOT NULL,
  time time NOT NULL,
  parent_id integer DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (article_id) REFERENCES article(id)
);



INSERT INTO user (id, username, password, fname, lname, year, month, day, salt, profile, avatar, subscriber) VALUES
  (1, 'David', 'pa55word', 'David', 'Smith', 1980, 12, 6, '123', 'Hello', '1', NULL),
  (2, 'Geoff', 'pa55word', 'Geoff', 'MIller', 1990, 6, 19, '234', 'Hello.','2', 3),
  (3, 'Annika', 'pa55word', 'Annika', 'Lee', 1975, 2, 23, '567', 'Hello!!','3', NULL);


INSERT INTO article (id, header, content,  time, user_id, image) VALUES
  (1, 'Header1', 'Content1', '2022-11-11 08:26:13', 1, 'image1'),
  (2, 'Header2', 'Content2', '2023-01-01 12:30:02', 2, 'image2'),
  (3, 'Header3', 'Content3', '2023-03-21 22:01:52', 3, 'image3');


INSERT INTO likes (id, user_id, article_id) VALUES
  (1, 1, 3),
  (2, 1, 2),
  (3, 2, 3);

INSERT INTO comment (id, user_id, article_id, content, time, parent_id) VALUES
  (1, 1, 2, 'Hi', '2022-11-11 08:26:13', NULL),
  (2, 2, 3, 'Good', '2022-11-12 16:46:25', 1),
  (3, 3, 3, 'Lol', '2023-01-08 10:41:20', NULL);

