--22. Duplicate Registrations Check
--Detect if a user has been registered more than once for the same event.

SELECT u.user_id, u.full_name, r.event_id, COUNT(*) AS duplicate_counts
FROM Users u
JOIN Registrations r
ON u.user_id = r.user_id
GROUP BY u.user_id, u.full_name, r.event_id
HAVING COUNT(*) > 1;