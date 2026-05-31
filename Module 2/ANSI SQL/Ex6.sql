--6. Event Resource Summary
--Generate a report showing the number of resources (PDFs, images, links) uploaded for each
--event.

SELECT e.title, COUNT(r.resource_id)
FROM Events e
JOIN Resources r
ON e.event_id = r.event_id
GROUP BY e.event_id,e.title;