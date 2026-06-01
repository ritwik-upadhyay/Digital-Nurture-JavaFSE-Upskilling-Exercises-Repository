--20. User Engagement Index
--For each user, calculate how many events they attended and how many feedbacks they
--submitted.

SELECT u.user_id, u.full_name, u.email, COUNT(DISTINCT r.event_id) AS total_events_attended, COUNT(DISTINCT f.feedback_id) AS total_feedbacks_submitted
FROM Users u
JOIN Registrations r
ON u.user_id = r.user_id
JOIN Feedback f  
ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name, u.email;