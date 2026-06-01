--19. Completed Events with Feedback Summary
--For completed events, show total registrations and average feedback rating.

SELECT e.event_id, e.title, COUNT(r.registration_id) AS total_registrations, AVG(f.rating) AS avg_feedback_rating
FROM Events e
JOIN Registrations r
ON e.event_id = r.event_id
JOIN Feedback f
ON r.event_id = f.event_id
WHERE e.end_date < CURDATE()
GROUP BY e.event_id, e.title;