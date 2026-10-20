function validarUsuario(nombre, correo, edad){
    const errores = [];
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        errores.push('El nombre no puede estar vacio');
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof correo !== 'string' || !regexCorreo.test(correo)) {
        errores.push('El correo no tiene un formato válido');
    }

    if (typeof edad !== 'number' || edad < 0 || !Number.isInteger(edad)) {
        errores.push('La edad debe ser un número entero positivo');
    }
    

    return {
        valido: errores.length === 0,
        errores: errores
    };
}

    console.log(validarUsuario('Juan', 'juan@example.com', 25));
    console.log(validarUsuario('', 'mariagmail.com', 30));