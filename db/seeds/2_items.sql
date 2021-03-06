DELETE FROM items;

INSERT INTO items (seller_id, photo, price, title, description, type, is_active, is_sold, is_featured)
VALUES (1,'https://i.ibb.co/DkFCHGQ/bed-frame.jpg', 199, 'White Bed With Drawers', 'An awesome bed for small space', 'beds', TRUE, TRUE, FALSE),
       (1,'images/bookshelf.jpg', 249, 'Tall Bookshelf', 'A nice wooden bookshelf', 'bookshelves', TRUE, FALSE, FALSE),
       (1,'https://i.ibb.co/xqF3YHX/chair-dining.jpg', 199, 'Ivory Dining Chair', 'Nice ivory fabric dining chairs(3 chairs)', 'chairs', TRUE, FALSE, TRUE),
       (2,'/images/chair-outdoor.jpg', 49, 'Outdoor Patio Chair', 'A nice patio chair', 'chairs', TRUE, FALSE, FALSE),
       (2,'/images/chair-sofa.jpg', 149, 'Blue Loveseat Sofa', 'A soft blue sofa. Perfect for a small condo', 'sofas', TRUE, FALSE, FALSE),
       (2,'/images/chair.jpg', 399, 'Orange Velvet Chair', 'A mid-century modern single chair with soft orange velvet fabric', 'chairs', TRUE, FALSE, TRUE),
       (3,'https://i.ibb.co/s9R62Gd/desk.jpg', 149, 'Office Desk', 'A solid wood desk. Pefect for your home office!', 'desks', TRUE, FALSE, FALSE),
       (3,'/images/dresser.jpg', 99, 'Colorful chest dresser', 'A colorful dresser for your kid!', 'storage', TRUE, FALSE, TRUE),
       (3,'https://i.ibb.co/6PNpj1Q/table-coffee.jpg', 89, 'Sleek Coffee Table', 'A modern coffee table with wood top', 'tables', TRUE, FALSE, FALSE),
       (4,'https://i.ibb.co/v1RdnSg/table-dining.jpg', 499, 'Classy Dining Table', 'A classy dining table', 'tables', TRUE, FALSE, FALSE),
       (4,'/images/table-outdoor.jpg', 59, 'Marble Top Outdoor table', 'A small outdoor table with marble top', 'tables', TRUE, FALSE, FALSE),
       (4,'/images/tv-stand.jpg', 789, 'White TV Stand', 'A mid-century white tv stand. Lots of storage!', 'tv stands', TRUE, FALSE, TRUE),
       (5,'/images/pexels-photo-545048.jpg', 29, 'Simple Table Lamp', 'A simple lamp with rose gold finish.', 'lamps', TRUE, FALSE, TRUE),
       (5,'/images/pexels-photo-3675263.jpg', 499, 'Grey Bed Frame', 'A modern bed frame', 'beds', TRUE, FALSE, FALSE),
       (5,'/images/pexels-photo-1176516.jpg', 49, 'Silver Table Lamp', 'A lamp with silver body and white head', 'lamps', TRUE, FALSE, FALSE),
       (6,'/images/pexels-photo-3637740.jpg', 999, 'Dark Grey Leather King Bed', 'A fancy bed...very fancy', 'beds', TRUE, FALSE, TRUE),
       (6,'/images/pexels-photo-1125130.jpg', 399, 'Gold Finish Bookshelf', 'Gold finish bookshelf', 'bookshelves', TRUE, FALSE, TRUE),
       (6,'/images/pexels-photo-2995012.jpg', 39, 'Modern Dining Chair', 'A comfy dining chair-white color', 'chairs', TRUE, FALSE, FALSE),
       (7,'/images/pexels-photo-1321910.jpg', 29, 'Folding Outdoor Chair', 'A comfy Folding outdoor chair. Nice and light.', 'chairs', TRUE, FALSE, FALSE),
       (7,'/images/pexels-photo-1866149.jpg', 699, 'Leather Sofa', 'A nice leather sofa', 'sofas', TRUE, FALSE, FALSE),
       (7,'/images/pexels-photo-2082090.jpg', 199, 'Contemporary Chair', 'A description for Confident Periwinkle', 'chairs', TRUE, FALSE, TRUE),
       (8,'/images/office-home-house-desk-159839.jpg', 129, 'Black Desk', 'A Black Desk', 'desks', TRUE, FALSE, FALSE),
       (8,'/images/pexels-photo-3952087.jpg', 499, 'Vintage Drawers', 'An old drawer', 'storage', TRUE, FALSE, TRUE),
       (8,'/images/pexels-photo-2387754.jpg', 39, 'Round Coffe Table', 'A great coffee table', 'tables', TRUE, FALSE, TRUE),
       (9,'/images/pexels-photo-271696.jpg', 149, 'Round Dining Table', 'Perfect for 4 people', 'tables', TRUE, FALSE, TRUE),
       (9,'/images/pexels-photo-1705716.jpg', 29, 'Outdoor Table', 'A folding outdoor table with a tray', 'tables', TRUE, FALSE, FALSE),
       (9,'/images/pexels-photo-3144581.jpg', 899, 'Big Dining Table', 'A large dining table with glossy finish', 'tables', TRUE, FALSE, TRUE),
       (10,'/images/pexels-photo-2082092.jpg', 19, 'Night Table', 'A small night table', 'tables', TRUE, FALSE, FALSE),
       (10,'/images/pexels-photo-3932930.jpg', 99, 'Rattan Drawers', 'A seaside rattan drawers', 'storage', TRUE, FALSE, FALSE),
       (10,'/images/pexels-photo-1112598.jpg', 29, 'Metal Lamp', 'A description for Curtain In A Castle', 'lamps', TRUE, FALSE, FALSE),
       (11,'images/pexels-photo-1148955.jpg', 199, 'Vintage Armchair', 'Vintage Armchair from 1900s', 'chairs', TRUE, FALSE, FALSE),
       (11,'/images/pexels-photo-198272.jpg', 299, 'Funky Sofa', 'A corduroy loveseat', 'sofas', TRUE, FALSE, FALSE),
       (11,'/images/pexels-photo-116910.jpg', 99, 'Vintage Chair', 'A good choice for vintage lovers', 'chairs', TRUE, FALSE, FALSE),
       (12,'/images/pexels-photo-2762247.jpg', 19, 'Simple Dining Chair', 'A Black dining chair', 'chairs', TRUE, FALSE, FALSE),
       (12,'/images/pexels-photo-1853725.jpg', 299, 'Industrial Bookshelf', 'An industrial bookshelf set', 'bookshelves', TRUE, FALSE, TRUE),
       (12,'/images/pexels-photo-3659683.jpg', 299, 'Tufted Queen Bed', 'your eye travels to its soaring upholstered headboard', 'beds', TRUE, FALSE, TRUE);

