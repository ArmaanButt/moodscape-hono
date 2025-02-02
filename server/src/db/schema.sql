DROP TABLE IF EXISTS paintings;
CREATE TABLE IF NOT EXISTS paintings (
  id SERIAL PRIMARY KEY,
  title TEXT,
  image_url TEXT,
  image_location TEXT,
  description TEXT,
  current_location TEXT,
  dimensions TEXT,
  llm_description TEXT,
  technique TEXT
);