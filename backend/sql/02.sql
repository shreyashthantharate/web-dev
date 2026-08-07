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

