CREATE TABLE canteen_menu(
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(100),
  category VARCHAR(50),
  price INT,
  is_available BOOLEAN DEFAULT TRUE
) 


-- Insert data
INSERT INTO canteen_menu
(item_name, category, price)
VALUES
('Masala Chai', 'Beverages', 10 ),
('Vada Pav', 'Snacks', 15 ),
('Samosa', 'Snacks', 12),
('Rajma Chawal', 'Meals', 60),
('Maggi', 'Snacks', 25),
('Ice Tea', 'Beverages', 40),
('Idli', 'Snacks', 50);

--Update data
UPDATE canteen_menu
SET price = 20
WHERE item_name = 'Vada Pav';-- ! How you can get distinct values
select distinct role from ipl_players;


UPDATE canteen_menu
SET price = price - 5
WHERE category = 'Beverages';

UPDATE canteen_menu
SET is_available = FALSE
WHERE item_name = 'Samosa';

UPDATE canteen_menu
SET is_available = TRUE, price = 30
WHERE item_name = 'Samosa';


-- DRY RUN in sql (must do dry run before update or delete)
SELECT * FROM canteen_menu
WHERE item_name = 'Samosa';


-- Delete data
DELETE FROM canteen_menu
WHERE item_name = 'Samosa';

TRUNCATE TABLE canteen_menu;

-- What is DML
-- Data Manipulation Language: to add, update, delete, and read data inside a database table

SELECT * FROM canteen_menu;
