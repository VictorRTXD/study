sum = (valor1, valor2) => {
    return valor1 + valor2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

//en el caso de sum, no es necesario ponerle llaves ni ingresarle numeros
//como argumento
console.log(calc(2, 4, sum));


setTimeout(() => {
    console.log("hola js");
}, 2000);

function gretting(name) {
    console.log("hola " + name);
}

setTimeout(gretting, 2000, "Victor");

// mi ejemplo

function saludar(nombre) {
    return "hola " + nombre;
}

function procesarEntradaUsuario(nombre, callback) {
    return callback(nombre);
}

console.log(procesarEntradaUsuario("victorRTXD", saludar));