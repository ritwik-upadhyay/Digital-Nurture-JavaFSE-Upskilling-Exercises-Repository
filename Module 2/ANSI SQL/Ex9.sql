--9. Organizer Event Summary
--For each event organizer, show the number of events created and their current status
--(upcoming, completed, cancelled).

SELECT u.full_name, COUNT(e.event_id) AS total_events, e.status
FROM Events e
JOIN Users u 
ON e.organizer_id = u.user_id
GROUP BY u.user_id,u.full_name,e.status;
