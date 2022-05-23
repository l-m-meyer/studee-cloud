DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message TEXT,
  sender VARCHAR(255),
  meeting_id INT REFERENCES meetings(id)
);