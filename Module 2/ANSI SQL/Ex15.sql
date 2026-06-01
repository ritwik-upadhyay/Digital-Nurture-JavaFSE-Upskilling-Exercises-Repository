--15. Event Session Time Conflict
--Identify overlapping sessions within the same event (i.e., session start and end times that
--conflict).

SELECT s1.title AS Session_1, s2.title AS Session_2, s1.session_id
FROM Sessions s1
JOIN Sessions s2
ON s1.event_id = s2.event_id 
AND s1.session_id < s2.session_id
WHERE s1.start_time < s2.end_time
AND s1.end_time > s2.start_time;