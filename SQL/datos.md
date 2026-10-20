CREATE TABLE clientes (
    id     INT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    ciudad VARCHAR(100)
);

CREATE TABLE productos(
 id INT PRIMARY KEY,
 nombre VARCHAR(100),
 precio DECIMAL(10,2),
 stock INT	
);

CREATE TABLE ventas (
    id          INT PRIMARY KEY,
    cliente_id  INT REFERENCES clientes(id),
    producto_id INT REFERENCES productos(id),
    cantidad    INT,
    fecha       DATE
);

INSERT INTO clientes (id, nombre, correo, ciudad) VALUES
(1, 'Jorge Cristian', 'Jorge@gmail.com', 'Morelia'),
(2, 'Mario Garcia', 'Mario@gmail.com', 'Queretaro'),
(3, 'Tinashe Perez', 'Tinashe@gmail.com', 'Queretaro'),
(4, 'Ruben Valverde', 'Rube@gmail.com', 'Tarimbaro')

INSERT INTO productos (id, nombre, precio, stock) VALUES
(1, 'Laptop', 25000, 8),
(2, 'Audifonos', 300, 2),
(3, 'Telefono', 12000, 10),
(4, 'tablet', 3500, 80),
(5, 'yogurth', 20, 55),
(6, 'galletas', 100, 90),
(7, 'termo', 288, 8)

INSERT INTO ventas (id, cliente_id, producto_id, cantidad, fecha) VALUES
(1,1,1,1, '26-09-01'),
(2,2,2,2, '25-09-01'),
(3,3,3,3, '26-09-10'),
(4,4,4,4, '26-09-20'),
(5,1,7,100, '26-09-11'),
(6,4,5,20, '26-09-21'),
(7,2,6,90, '26-09-01')