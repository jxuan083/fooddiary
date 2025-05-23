-- add users
INSERT INTO USERS (username, email, password, phone_no, status)
VALUES (%s, %s, %s, %s, %s)
-- add category
INSERT INTO CATEGORY (category_name)
VALUES (%s)
-- add restaurant
INSERT INTO RESTAURANT (restaurant_name, category_id, rating, location)
VALUES (%s, %s, %s, %s)
-- add cuisinecategory
INSERT INTO CUISINECATEGORY (cuisine_name, category_id, restaurant_id)
VALUES (%s, %s, %s)
-- add review
INSERT INTO REVIEW (user_id, restaurant_id, comment, picture_url, rating, created_at, status)
VALUES (%s, %s, %s, %s, %s, %s, %s)
-- add friend request
INSERT INTO FRIEND_REQUEST (sender_id, receiver_id, sent_at, status)
VALUES (%s, %s, %s, %s)
-- add favorite
INSERT INTO FAVORITE (user_id, restaurant_id, created_at)
VALUES (%s, %s, %s)
-- add user preference
INSERT INTO USER_PREFERENCE (price_range, cuisine_id, user_id)
VALUES (%s, %s, %s)
-- search restaurant by name
SELECT rerestaurant_name, category_id, rating, location
FROM RESTAURANT
WHERE rerestaurant_name = %s
-- search restaurant by location
SELECT rerestaurant_name, category_id, rating, location
FROM RESTAURANT
WHERE rerestaurant_location = %s
-- hide (show) review (status can be 'private' or 'public' depend on hide or show)
UPDATE REVIEW
SET status = %s
WHERE review_id = %s
-- show past review
SELECT restaurant_id, comment, picture_url, rating, created_at, status
FROM REVIEW
WHERE user_id = %s
-- draw restaurant
SELECT restaurant_name, rating, location
FROM RESTAURANT
WHERE category_id = %s
ORDER BY rating
-- delete favorite
DELETE FROM FAVORITE
WHERE user_id = %s AND restaurant_id = %s
-- edit user name
UPDATE USERS
SET username = %s
WHERE user_id = %s
-- edit user email
UPDATE USERS
SET email = %s
WHERE user_id = %s
-- edit user password
UPDATE USERS
SET password = %s
WHERE user_id = %s
-- edit user phone number
UPDATE USERS
SET phone_no = %s
WHERE user_id = %s
-- user set himself status
UPDATE USERS
SET status = %s
WHERE user_id = %s
-- status of friend request
UPDATE FRIEND_REQUEST
SET status = %s
WHERE request_id = %s
-- view your friends list
SELECT user_id FROM (
        SELECT receiver_id AS user_id
        FROM FRIEND_REQUEST
        WHERE sender_id = %s AND status = 'accepted'
        UNION
        SELECT sender_id AS user_id
        FROM FRIEND_REQUEST
        WHERE receiver_id = %s AND status = 'accepted'
    ) AS friends
-- view meal buddy info 1. for FAVORITE 2. for REVIEW
SELECT F.favorite_id, F.user_id, U.username, R.restaurant_name, F.created_at
FROM FAVORITE F
JOIN USERS U ON F.user_id = U.user_id
JOIN RESTAURANT R ON F.restaurant_id = R.restaurant_id
WHERE F.user_id IN (
    SELECT user_id FROM (
        SELECT receiver_id AS user_id
        FROM FRIEND_REQUEST
        WHERE sender_id = %s AND status = 'accepted'
        UNION
        SELECT sender_id AS user_id
        FROM FRIEND_REQUEST
        WHERE receiver_id = %s AND status = 'accepted'
    ) AS friends
)
AND U.status = 'public'

SELECT RV.review_id, RV.user_id, U.username, R.restaurant_name, RV.comment, RV.rating, RV.picture_url, RV.created_at
FROM REVIEW RV
JOIN USERS U ON RV.user_id = U.user_id
JOIN RESTAURANT R ON RV.restaurant_id = R.restaurant_id
WHERE RV.user_id IN (
    SELECT user_id FROM (
        SELECT receiver_id AS user_id
        FROM FRIEND_REQUEST
        WHERE sender_id = %s AND status = 'accepted'
        UNION
        SELECT sender_id AS user_id
        FROM FRIEND_REQUEST
        WHERE receiver_id = %s AND status = 'accepted'
    ) AS friends
)
AND RV.status = 'public'
AND U.status = 'public'
-- update restaurant rating (do it buy review table avg)
SELECT AVG(rating)
FROM REVIEW
WHERE restaurant_id = %s
-- then, get avg so you can update
UPDATE RESTAURANT
SET rating = %s
WHERE restaurant_id = %s
-- delete meal buddy
UPDATE FRIEND_REQUEST
SET status = 'cancelled'
WHERE (sender_id = %s AND receiver_id = %s OR sender_id = %s AND receiver_id = %s) AND status = 'accepted';
-- search restaurant by name
SELECT restaurant_name, location
FROM RESTAURANT
WHERE restaurant_name LIKE %s;
-- search restaurant by location, this method is basically same as view nearby restaurants
SELECT restaurant_name, location
FROM RESTAURANT
WHERE location LIKE %s;
