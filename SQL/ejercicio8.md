--8
INSERT INTO productos (id, nombre, precio, stock)
VALUES (11, 'Webcam', 899, 12);

SELECT * FROM productos;

UPDATE productos set stock = 10 WHERE id = 11;
