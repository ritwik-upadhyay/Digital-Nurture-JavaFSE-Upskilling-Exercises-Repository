--5. Most Active Cities
--List the top 5 cities with the highest number of distinct user registrations.

SELECT u.city, COUNT(DISTINCT r.user_id) AS User_Registrations
FROM Users u
JOIN Registrations r
ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY COUNT(DISTINCT r.user_id) DESC
LIMIT 5;