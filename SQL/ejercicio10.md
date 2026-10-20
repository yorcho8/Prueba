--10
SELECT
	c.id,
	c.nombre,
	COALESCE(SUM(v.cantidad * p.precio),0) AS total_compras
FROM clientes c
LEFT JOIN ventas v ON v.cliente_id = c.id
LEFT JOIN productos p ON p.id 	= v.producto_id
GROUP BY c.id, c.nombre
ORDER BY total_compras DESC;
