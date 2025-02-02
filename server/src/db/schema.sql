CREATE TABLE IF NOT EXISTS paintings (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT,
  image_location TEXT,
  description TEXT,
  current_location TEXT,
  dimensions TEXT,
  llm_description TEXT,
  technique TEXT
);

INSERT OR IGNORE INTO paintings (id, title, technique, dimensions, current_location)
VALUES 
(0, 'Scene in Tyrol', 'Oil on fiberboard', '23.8 cm × 32.4 cm (9.4 in × 12.8 in)', 'https://en.wikipedia.org/wiki/Hirshhorn_Museum_and_Sculpture_Garden'),
(1, 'Sunshine and Shadow', 'Oil on paper mounted on canvas', '48.2 cm × 33 cm (19.0 in × 13.0 in)', 'https://en.wikipedia.org/wiki/Newark_Museum'),
(2, 'The Old Mill', 'Oil on canvas', '118.8 cm × 94.0 cm (46.8 in × 37.0 in)', 'https://en.wikipedia.org#cite_note-frickoldmill-4'),
(3, 'Study of a Ewe', 'Drawing: black crayon, red/white chalk on laid paper', '26.8 cm × 35.7 cm (10.6 in × 14.1 in)', 'https://en.wikipedia.org/wiki/Brooklyn_Museum'),
(4, 'A Rustic Mill', 'Oil on canvas', '375 cm × 279 cm (147.6 in × 109.8 in)', 'https://en.wikipedia.org#cite_note-5'),
(5, 'European Landscape', 'Oil on paper mounted on canvas', '48.2 cm × 67.3 cm (19.0 in × 26.5 in)', 'https://en.wikipedia.org/wiki/Hirshhorn_Museum_and_Sculpture_Garden'),
(6, 'Italian Costume Studies', 'Oil on paper', '28.6 cm × 45.7 cm (11.3 in × 18.0 in)', 'https://en.wikipedia.org/wiki/Lyman_Allyn_Art_Museum'),
(7, 'Olevano', 'Oil on canvas mounted on panel', '48.6 cm × 67.3 cm (19.1 in × 26.5 in)', 'https://en.wikipedia.org/wiki/Saint_Louis_Art_Museum'),
(8, 'Fishing Boats at Capri', 'Oil on paper mounted on canvas', '34.3 cm × 49.5 cm (13.5 in × 19.5 in)', 'https://en.wikipedia.org/wiki/Museum_of_Fine_Arts,_Boston'),
(9, 'Narragansett People', 'Oil on cardboard', '48.2 cm × 33 cm (19.0 in × 13.0 in)', 'https://en.wikipedia.org/wiki/Millicent_Library'),
(10, 'Gathering Storm', 'Oil on paper mounted on paperboard', '18.1 cm × 25.4 cm (7.1 in × 10.0 in)', 'https://en.wikipedia.org/wiki/Hirshhorn_Museum_and_Sculpture_Garden'),
(11, 'Gosnold at Cuttyhunk, 1602', 'Oil on canvas', '71.1 cm × 124.5 cm (28.0 in × 49.0 in)', 'https://en.wikipedia.org/wiki/New_Bedford_Whaling_Museum'),
(12, 'Portico of Octavia, Rome', 'Oil on canvas', '70.2 cm × 94.9 cm (27.6 in × 37.4 in)', 'https://en.wikipedia.org/wiki/M._H._de_Young_Memorial_Museum'),
(13, 'The Black Horse', 'Oil on paper mounted on paperboard', '34.3 cm × 4.8 cm (13.5 in × 1.9 in)', 'https://en.wikipedia.org/wiki/Museum_of_Fine_Arts,_Boston'),
(14, 'Beached Ship', 'Oil on canvas', '43.2 cm × 54 cm (17.0 in × 21.3 in)', 'https://en.wikipedia.org#cite_note-7'),
(15, 'View Near Newport', 'Oil on milkboard', '30.5 cm × 45.7 cm (12 in × 18 in)', 'https://en.wikipedia.org/wiki/Currier_Museum_of_Art'),
(16, 'Swiss Mountain Scene', 'Oil on canvas', '60 cm × 85 cm (23.6 in × 33.5 in)', 'https://en.wikipedia.org/wiki/Herbert_F._Johnson_Museum_of_Art'),
(17, 'The Trout Brook', 'Oil on academy board', '23.2 cm × 29.8 cm (9.1 in × 11.7 in)', 'https://en.wikipedia.org/wiki/Fogg_Museum'),
(18, 'Nooning on the Platte, N.D.', 'Oil on paper mounted on canvas', '17.2 cm × 32.7 cm (6.8 in × 12.9 in)', 'https://en.wikipedia.org/wiki/Saint_Louis_Art_Museum'),
(19, 'Surveyor''s Wagon in the Rockies', 'Oil on paper mounted on canvas', '19.7 cm × 32.7 cm (7.8 in × 12.9 in)', 'https://en.wikipedia.org/wiki/Saint_Louis_Art_Museum'),
(20, 'View of Chimney Rock', 'Oil on millboard', '33.7 cm × 49.4 cm (13.3 in × 19.4 in)', 'https://en.wikipedia.org/wiki/Colby_College_Museum_of_Art');
