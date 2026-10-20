const carrito = [
    {precio: 400, cantidad: 2},
    {precio: 150, cantidad: 3},
];

function calcularTotal(carrito){
    const subtotal = carrito.reduce((suma, item) => suma + (item.precio * item.cantidad), 0);
    const descuento = subtotal > 1000 ? subtotal * 0.1 : 0;
    const total = subtotal - descuento;
    return { subtotal, descuento, total };
}
console.log(calcularTotal(carrito));