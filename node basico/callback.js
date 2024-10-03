function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    const nombre = "Juan";
    callback(nombre);
}

procesarEntradaUsuario(saludar);