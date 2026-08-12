-- ====================================================
-- CLASS 2: TOPIC 2 - LEFT JOIN
-- ====================================================

-- (Assumes tables `students` and `internships` from 05_inner_join.sql exist)

-- ====================================================
-- 1. LEFT JOIN (The "Inclusive" Join)
-- ====================================================

-- Definition: Returns ALL records from the Left table (students), 
-- and matched records from the Right table (internships).
-- If no match is found, returns NULL for the right side.

-- Use Case: "Show me all students and their internship status (even if they haven't applied)."


SELECT
  s.name,
  s.branch,
  i.company_name,
  i.stipend
FROM student AS s
LEFT JOIN internships AS i ON i.student_id = s.student_id;

