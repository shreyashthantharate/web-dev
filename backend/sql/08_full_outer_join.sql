-- ====================================================
-- CLASS 2: TOPIC 2 - FULL OUTER JOIN
-- ====================================================

-- (Assumes tables `students` and `internships` from 05_inner_join.sql exist)

-- ====================================================
-- 1. FULL OUTER JOIN
-- ====================================================

-- Definition: Returns ALL records when there is a match in either the Left table OR the Right table.
-- If there is no match, the missing side will contain NULL.
-- It's essentially a combination of a LEFT JOIN and a RIGHT JOIN.

-- Use Case: "Give me a complete overview: All students (whether they have internships or not) 
-- AND all internships (whether they are linked to a student or not)."



SELECT
  s.name AS student_name,
  s.branch,
  i.company_name,
  i.status
FROM student AS s
FULL OUTER JOIN internships AS i ON i.student_id = s.student_id;