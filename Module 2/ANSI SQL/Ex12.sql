--12. Event with Maximum Sessions
--List the event(s) with the highest number of sessions.

SELECT e.event_id, e.title, COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s
ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
ORDER BY COUNT(s.session_id) DESC
LIMIT 1;