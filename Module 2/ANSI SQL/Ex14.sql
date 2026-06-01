--14. Most Registered Events
--List top 3 events based on the total number of user registrations.

SELECT e.event_id,e.title, COUNT(r.user_id) AS Total_User_Registrations
FROM Events e
JOIN Registrations r
ON e.event_id = r.event_id
GROUP BY e.event_id,e.title
ORDER BY COUNT(r.user_id) DESC
LIMIT 3;