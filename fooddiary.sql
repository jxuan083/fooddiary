SET NAMES 'utf8mb4';
CREATE DATABASE IF NOT EXISTS `foodiary`;
CHARACTER SET utf8mb4
COLLATE utf8mb4_zh_0900_as_cs;
USE  `foodiary`;

CREATE TABLE CATEGORY (
 category_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 category_name VARCHAR(255) NOT NULL
);

CREATE TABLE USERS (
 user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(100) NOT NULL,
 email VARCHAR(255) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 phone_no VARCHAR(100),
 status ENUM('public', 'private') NOT NULL DEFAULT 'private'
);

CREATE TABLE RESTAURANT (
 restaurant_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 restaurant_name VARCHAR(255) NOT NULL,
 category_id BIGINT,
 rating DECIMAL(2,1),
 location TEXT NOT NULL,
 FOREIGN KEY (category_id) REFERENCES CATEGORY(category_id)
);

CREATE TABLE CUISINECATEGORY (
 cuisine_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 cuisine_name VARCHAR(255) NOT NULL,
 category_id BIGINT,
 restaurant_id BIGINT,
 FOREIGN KEY (category_id) REFERENCES CATEGORY(category_id),
 FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id)
);

CREATE TABLE REVIEW (
 review_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 user_id BIGINT,
 restaurant_id BIGINT,
 comment TEXT NOT NULL,
 picture_url VARCHAR(255) NOT NULL,
 rating DECIMAL(2,1) NOT NULL CHECK (rating >= 1.0 AND rating <= 5.0),
 created_at TIMESTAMP NOT NULL DEFAULT NOW(),
 status ENUM('public', 'private') NOT NULL DEFAULT 'public',
 FOREIGN KEY (user_id) REFERENCES USER(user_id),
 FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id)
);

CREATE TABLE FRIEND_REQUEST (
 request_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 sender_id BIGINT,
 receiver_id BIGINT,
 sent_at TIMESTAMP NOT NULL DEFAULT NOW(),
 status ENUM('pending', 'accepted', 'rejected', 'cancelled') NOT NULL DEFAULT 'pending',
 FOREIGN KEY (sender_id) REFERENCES USERS(user_id),
 FOREIGN KEY (receiver_id) REFERENCES USERS(user_id)
);

CREATE TABLE FAVORITE (
    favorite_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    restaurant_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS(user_id),
    FOREIGN KEY (restaurant_id) REFERENCES RESTAURANT(restaurant_id),
    UNIQUE (user_id, restaurant_id)
);

CREATE TABLE USER_PREFERENCE(
 preference_id BIGINT AUTO_INCREMENT PRIMARY KEY,
 price_range INT CHECK (price_range >= 0 AND price_range <= 10000),
 cuisine_id BIGINT,
 user_id BIGINT,
 FOREIGN KEY (cuisine_id) REFERENCES CUISINECATEGORY(cuisine_id),
 FOREIGN KEY (user_id) REFERENCES USERS(user_id)
);