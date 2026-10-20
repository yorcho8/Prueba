--9
SELECT
    v.id       AS id_venta,
    v.fecha,
    c.nombre   AS cliente,
    p.nombre   AS producto,
    v.cantidad
FROM ventas v
JOIN clientes  c ON c.id = v.cliente_id
JOIN productos p ON p.id = v.producto_id
ORDER BY v.id;