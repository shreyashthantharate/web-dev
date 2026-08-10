CREATE TABLE smart_watch_sales (
    sale_id SERIAL PRIMARY KEY,
    brand VARCHAR(50), -- Boat, Noise, Apple, Samsung
    model VARCHAR(100),
    city VARCHAR(50),
    units_sold INT,
    price_per_unit DECIMAL(10, 2),
    sale_date DATE
);


-- Inserting Indian Context Data
INSERT INTO smart_watch_sales (brand, model, city, units_sold, price_per_unit, sale_date) VALUES
('Boat', 'Storm Call', 'Mumbai', 10, 1500.00, '2023-10-01'),
('Boat', 'Storm Call', 'Delhi', 15, 1500.00, '2023-10-02'),
('Noise', 'ColorFit', 'Bangalore', 20, 2000.00, '2023-10-01'),
('Noise', 'ColorFit', 'Mumbai', 5, 2000.00, '2023-10-03'),
('Apple', 'Watch Series 9', 'Mumbai', 2, 45000.00, '2023-10-01'),
('Apple', 'Watch Series 9', 'Bangalore', 8, 45000.00, '2023-10-02'),
('Samsung', 'Galaxy Watch', 'Delhi', 3, 25000.00, '2023-10-01'),
('Boat', 'Xtend', 'Pune', 25, 1200.00, '2023-10-04'),
('Noise', 'Pro 4', 'Delhi', 12, 2500.00, '2023-10-05');



-- Aggregation

-- get the count of total rows
select count(*) as total_rows from smart_watch_sales;

-- sum of all rows
select sum(units_sold * price_per_unit) as total_revenue from smart_watch_sales;
-- select units_sold * price_per_unit as total_revenure_per_store from smart_watch_sales;


-- average
select avg(price_per_unit) as avg_price_per_unit from smart_watch_sales;

-- cheapest
select min(price_per_unit) as cheapest from smart_watch_sales;

-- costliest
select max(price_per_unit) as costliest from smart_watch_sales;



-- ! Group By

select brand, sum(units_sold) as total_units_sold
from smart_watch_sales
GROUP BY brand
ORDER BY  total_units_sold desc;



select city, sum(units_sold * price_per_unit) as city_revenue from smart_watch_sales
group by city
order by city_revenue desc;


INSERT INTO smart_watch_sales (brand, model, city, units_sold, price_per_unit, sale_date) VALUES
('Boat', 'ABC', 'Mumbai', 20, 2000.00, '2023-10-01');

-- multi column grouping
select city, brand, sum(units_sold) as units
from smart_watch_sales
group by city, brand
order by units desc;


-- ! Using HAVING keyword