-- add users
INSERT INTO USERS (username, email, password, phone_no, status)
VALUES (%s, %s, %s, %s, %s)
-- add category
INSERT INTO CATEGORY (category_name)
VALUES (%s);
-- add restaurant
INSERT INTO RESTAURANT (restaurant_name, category_id, rating, location)
VALUES (%s, %s, %s, %s);
-- add cuisinecategory
INSERT INTO CUISINECATEGORY (cuisine_name, category_id, restaurant_id)
VALUES (%s, %s, %s);
-- add review
INSERT INTO REVIEW (user_id, restaurant_id, comment, picture_url, rating, created_at, status)
VALUES (%s, %s, %s, %s, %s, %s, %s);
-- add friend request
INSERT INTO FRIEND_REQUEST (sender_id, receiver_id, sent_at, status)
VALUES (%s, %s, %s, %s);
-- add favorite
INSERT INTO FAVORITE (user_id, restaurant_id, created_at)
VALUES (%s, %s, %s);
-- add user preference
INSERT INTO USER_PREFERENCE (price_range, cuisine_id, user_id)
VALUES (%s, %s, %s);
-- search restaurant by name
SELECT rerestaurant_name, category_id, rating, location
FROM RESTAURANT
WHERE rerestaurant_name = %s;
-- search restaurant by location
SELECT rerestaurant_name, category_id, rating, location
FROM RESTAURANT
WHERE rerestaurant_location = %s;
-- hide review
UPDATE REVIEW
SET status = %s
WHERE review_id = %s;
-- show past review
SELECT restaurant_id, comment, picture_url, rating, created_at, status
FROM REVIEW
WHERE user_id = %s;
-- draw restaurant
SELECT restaurant_name, rating, location
FROM RESTAURANT
WHERE category_id = %s
ORDER BY rating;
-- delete favorite
DELETE FROM FAVORITE
WHERE user_id = %s AND restanurant_id = %s;
-- edit user name
UPDATE USERS
SET username = %s
WHERE user_id = %s;
-- edit user email
UPDATE USERS
SET email = %s
WHERE user_id = %s;
-- edit user password
UPDATE USERS
SET password = %s
WHERE user_id = %s;
-- edit user phone number
UPDATE USERS
SET phone_no = %s
WHERE user_id = %s;
-- user set himself status
UPDATE USERS
SET status = %s
WHERE user_id = %s;
-- status of friend request
UPDATE FRIEND_REQUEST
SET status = %s
WHERE request_id = %s;
-- view meal buddy info

-- update restaurant rating
UPDATE RESTAURANT
SET rating = %s
WHERE restaurant_id = %s;