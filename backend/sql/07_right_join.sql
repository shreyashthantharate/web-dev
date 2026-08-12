-- ====================================================
-- 1. RIGHT JOIN 
-- ====================================================

-- Definition: Returns ALL records from the Right table, 
-- and matched records from the Left table.
-- If no match is found, returns NULL for the left side.

-- Use Case: "Show me all internships, and tell me which student applied for them."
-- Since all internships currently have valid students (thanks to our Foreign Key), 
-- this gives the same result as an Inner Join in our data. 

SELECT
  s.name,
  s.branch,
  i.company_name,
  i.stipend
FROM student AS s
RIGHT JOIN internships AS i ON i.student_id = s.student_id;