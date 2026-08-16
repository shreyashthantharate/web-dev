CREATE TABLE marks (
  id SERIAL PRIMARY KEY,
  name TEXT,
  marks INT NOT NULL
);

INSERT INTO marks (name, marks)
SELECT
    substr(
        translate(
            md5(random()::text || gs::text),
            'abcdefghijklmnopqrstuvwxyz',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ),
        1,
        12
    ) AS name,
    floor(random() * 100 + 1)::int AS marks

FROM generate_series(1, 1000000) AS gs;

select * FROM marks;

EXPLAIN ANALYZE SELECT marks FROM marks WHERE name = 'B638489A2162';

CREATE INDEX idx_name ON marks (name);

DROP INDEX idx_name;


--  non-key value index
CREATE INDEX idx_name ON marks (name) INCLUDE(marks);
                    -- This is table.           -- This is column name.
-- This include marks into index store.
-- Index stored in disk

-- here:
-- marks after ON -->  table name
-- name --> key column of the index
-- INCLUDE (marks) --> marks is a non-key/included column
-- idx_name --> index name