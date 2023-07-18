// Declarativas
function miFuncion() {
    return 3;
}

miFuncion();

// Expresion
var funcionExpresiva = function(a, b) {
    return a + b;
}

var estudiante = "Pepe";

function saludar3(estudiante) {
    // Con `` puedes automatizar textos, por ejemplo poner Hola a todos los alumnos sin escribirlo
    // todas las veces
    
    console.log(`Hola ${estudiante}`);
}

saludar3(estudiante);
// Hola pepe