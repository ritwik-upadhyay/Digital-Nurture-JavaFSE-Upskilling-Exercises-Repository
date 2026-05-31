--11. Daily New User Count
--Find the number of users who registered each day in the last 7 days.

SELECT u.registration_date, COUNT(u.user_id) AS new_users
FROM Users u
WHERE u.registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY u.registration_date
ORDER BY u.registration_date;