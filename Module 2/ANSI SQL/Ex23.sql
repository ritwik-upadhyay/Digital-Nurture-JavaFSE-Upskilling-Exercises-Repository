--23. Registration Trends
--Show a month-wise registration count trend over the past 12 months.

SELECT YEAR(r.registration_date) AS year, MONTH(r.registration_date) AS month, COUNT(*) AS total_registrations
FROM Registrations r
WHERE r.registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY YEAR(r.registration_date), MONTH(r.registration_date)
ORDER BY year, month;