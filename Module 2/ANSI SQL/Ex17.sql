--17. Multi-Session Speakers
--Identify speakers who are handling more than one session across all events.

SELECT s.speaker_name, COUNT(s.session_id) AS total_sessions_handled
FROM Sessions s
GROUP BY s.speaker_name
HAVING COUNT(s.session_id) > 1;