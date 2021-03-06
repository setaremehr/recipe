DROP DATABASE IF EXISTS fwitter_db;

CREATE DATABASE fwitter_db;

USE fwitter_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);


-- CREATE TABLE fweets (
-- 	id INT AUTO_INCREMENT NOT NULL,
--     fweet VARCHAR(255) NOT NULL,
--     userId INT references users(id),
--     PRIMARY KEY (id)
-- );

CREATE TABLE recipes (
    id INT AUTO_INCREMENT NOT NULL,
    recipe VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    ingredient VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE likes (
    id INT AUTO_INCREMENT NOT NULL,
    recipe_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- CREATE TABLE unlike (
--     id INT AUTO_INCREMENT NOT NULL,
--     recipe_id VARCHAR(255) NOT NULL,
--     user_id VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );
