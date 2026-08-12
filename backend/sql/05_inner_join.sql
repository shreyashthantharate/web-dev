CREATE TABLE student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  branch VARCHAR(50)
);

CREATE TABLE profiles (
  profile_id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  avatar_url VARCHAR(100),
  student_id INT REFERENCES student(student_id) ON DELETE CASCADE

  -- Soft delete (ON DELETE NULL)
  -- student_id INT REFERENCES student(student_id) ON DELETE NULL

  -- Restrict delete (ON DELETE RESTRICT)
  -- student_id INT REFERENCES student(student_id) ON DELETE RESTRICT

);

CREATE TABLE internships (
  internship_id SERIAL PRIMARY KEY,
  company_name VARCHAR(100),
  role VARCHAR(50),
  stipend INT CHECK(stipend > 1000 ),
  status VARCHAR(20), -- Selected / Pending / Rejected

  -- Foreign key is a key which is from another table and actually pointing to another table.

  student_id INT REFERENCES student(student_id) ON DELETE CASCADE



  
);

-- ON DELETE CASCADE - Delete the record from all table if student delete from main student table

-- ON DELETE NULL - Set student_id as null if student delete from main student table

-- ON DELETE RESTRICT -- If student have reference in another table restrict student deletion from main student table



-- Inserting Students (Including some who haven't applied for internships yet)
INSERT INTO student (name, email, branch) VALUES 
('Rahul', 'rahul@gmail.com', 'Computer Science'),
('Sneha', 'sneha@yahoo.com', 'Information Tech'),
('Amit', 'amit@hotmail.com', 'Electronics'),
('Priya', 'priya@gmail.com', 'Mechanical'), -- Priya is focusing on higher studies, no internships.
('Rohan', 'rohan@outlook.com', 'Civil'); -- Rohan is working on a startup, no internships.



-- Inserting Internships
INSERT INTO internships (student_id, company_name, role, stipend, status) VALUES 
(1, 'Google', 'Software Engineering Intern', 100000, 'Selected'), -- Rahul got selected!
(1, 'Microsoft', 'SDE Intern', 85000, 'Selected'), -- Rahul is killing it
(2, 'Amazon', 'Data Analyst Intern', 60000, 'Pending'), -- Sneha is waiting
(3, 'TCS', 'System Engineer Intern', 20000, 'Selected'), -- Amit got an offer
(5, 'OpenAI', 'AI Researcher', 150000, 'Selected'); -- Student ID 99 does not exist (Orphan Record) -> Would be BLOCKED by Foreign Key Constraint



select * from student;

select * from internships;



-- Joins

-- Inner Join
-- Get student data in internship table on runtime


SELECT s.name,
  s.branch,
  i.company_name,
  i.role,
  i.stipend
FROM student AS s
INNER JOIN internships AS i ON s.student_id = i.student_id;


