--8. Sessions per Upcoming Event
--Display all upcoming events with the count of sessions scheduled for them.

SELECT e.event_id, e.title, COUNT(s.session_id) AS sessions_scheduled
FROM Events e
JOIN Sessions s
ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id,e.title;