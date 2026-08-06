-- CREATE A TABLE
CREATE TABLE students(
  student_id SERIAL PRIMARY KEY, -- serial is auto incremented inteer, Primary key is unique + not null

  first_name VARCHAR(50) NOT NULL, -- my first nme should have max 50 letters
  last_name VARCHAR(50), --(50 is bytes) 50 * 8 bits

  email VARCHAR(322) UNIQUE NOT NULL,
  phone_number CHAR(10) UNIQUE,  -- 4000 bytes vs 10 bytes
  country_code VARCHAR(4),

  age INT CHECK(age > 12), -- check age should be greater then 12

  current_status VARCHAR(20) DEFAULT 'active' CHECK (current_status IN ('active', 'graduated', 'dropped_out')),

  masterji_handle VARCHAR(20) UNIQUE,

  has_joined_masterji BOOLEAN DEFAULT FALSE,

  current_score INT DEFAULT 0 CHECK (current_score >= 0 AND current_score <= 100),

  enrolement_date DATE DEFAULT CURRENT_DATE -- default this is UTC ('2026-08-30')
  -- enrolement_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- enrolement_date TTIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
);


ALTER TABLE students
ADD COLUMN batch_name VARCHAR(50) DEFAULT 'Web Dev 2026';

-- what is DDL?
-- Data Defination Language
-- It is a structure which we use to define a structure in SQL Database