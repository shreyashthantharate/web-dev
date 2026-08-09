CREATE TABLE ipl_players (
  player_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  team VARCHAR(50),
  role VARCHAR(50),
  runs_scored INT CHECK (runs_scored > 0),
  wicket_taken INT CHECK (wicket_taken > 0),
  -- auction_price_crores DECIMAL(5, 2) -- 5 initial values and go upto 2 decimal
  auction_price_crores INT
);


ALTER TABLE ipl_players
ADD COLUMN nickname VARCHAR(50);

ALTER TABLE ipl_players
RENAME COLUMN wicket_taken TO wickets_taken;


-- Inserting Data (Mix of real and funny fictitious stats)
INSERT INTO ipl_players (name, team, role, runs_scored, wickets_taken, auction_price_crores, nickname) VALUES
('Virat Kohli', 'RCB', 'Batsman', 973, 1, 15.00, 'King Kohli'),
('MS Dhoni', 'CSK', 'Wicketkeeper', 450, 43, 12.00, 'Thala'),
('Jasprit Bumrah', 'Mumbai Indians', 'Bowler', 15, 27, 12.00, 'Jassi'),
('Hardik Pandya', 'Mumbai Indians', 'All-Rounder', 400, 15, 15.00, 'Kung Fu Pandya'),
('Sunil Narine', 'KKR', 'All-Rounder', 350, 20, 8.50, 'Carrom King'),
('Rohit Sharma', 'Mumbai Indians', 'Batsman', 550, 10, 16.00, 'Hitman'),
('Rashid Khan', 'Gujarat Titans', 'Bowler', 50, 19, 15.00, 'The Magician'),
('Rinku Singh', 'KKR', 'Batsman', 475, 300, 0.55, 'The Spirit'),
('Arjun Tendulkar', 'Mumbai Indians', 'Bowler', 10, 3, 0.30, 'Arjun'),
('Kane Williamson', 'LSG', 'Batsman', 600, 65, 11.00, 'Kane Mama'),
('Mystery Player', NULL, 'Batsman', 100, 22, 1.00, 'Mystery Man'); -- Unsold / No Team (NULL Demo)


select * from ipl_players;

select name, nickname, team from ipl_players;


-- ! Filtering

select * from ipl_players where team = 'Mumbai Indians';

select name, nickname, auction_price_crores from ipl_players where auction_price_crores > 10;


-- ! LOGICAL OPERATORS (AND, OR)

select * from ipl_players where role = 'All-Rounder' and wickets_taken > 10;

select * from ipl_players where team = 'CSK' or team = 'RCB';


-- ! Pattern matching

-- return player where 2nd char or player name is 'a'
select * from ipl_players where name like '_a%';

-- return player where 3rd char or player name is 's'
select * from ipl_players where name like '__s%';

-- not case sensetive
select * from ipl_players where name ilike '__S%';


-- return players in team 
select * from ipl_players where team in ('Mumbai Indians', 'KKR', 'Gujarat Titans', 'CSK', 'RCB');


-- return players where price is between 10cr and 15cr
select * from ipl_players where auction_price_crores between 10 and 15;


-- return all players from all teams expect 'RCB'
select * from ipl_players where team != 'RCB';
select * from ipl_players where team <> 'CSK';


-- ! Sorting
-- Single Column Sorting
select name, nickname, auction_price_crores
from ipl_players
ORDER BY auction_price_crores desc;


-- Multi Column Sorting
-- sort team alphabetical order and sort auction_price_crores in descending
select team, nickname, auction_price_crores
from ipl_players
ORDER BY team asc, auction_price_crores desc;


-- ! Pagination

-- Top 3 most valuable players
select name, team, auction_price_crores
from ipl_players
ORDER BY auction_price_crores desc;
limit 3; -- increase limit to get more number of players


-- offset : skip what ever the value is provided 
-- (how many rows i want to skip)

-- return 3 expensive players but skip first 3 and then return next 3
select name, team, auction_price_crores
from ipl_players
ORDER BY auction_price_crores desc
limit 3
offset 3;


-- how pagination works
select name, team , auction_price_crores
from ipl_players
ORDER BY auction_price_crores desc
limit 15
offset (page - 1) * limit; -- page hear is your page number

-- how it works
-- page 1: (1 - 1) * 15 = 0 -- offset
-- page 1: (2 - 1) * 15 = 15 -- offset
-- page 1: (3 - 1) * 15 = 30 -- offset
-- page 1: (4 - 1) * 15 = 45 -- offset


-- ! Modification data in runtime

-- price is in crores, i want in lakhs
select name, team, auction_price_crores, (auction_price_crores * 100) as price_in_lakhs
from ipl_players;


-- addition of 2cr for each player in price
select name, team, auction_price_crores, (auction_price_crores + 2) as new_auction_price
from ipl_players;


-- ! How you can get distinct values
-- disctinct only returns unique values

select distinct role from ipl_players;


-- What is DQL?
-- Data Query Language: fetch and retrieve data from databases using the SELECT statement.