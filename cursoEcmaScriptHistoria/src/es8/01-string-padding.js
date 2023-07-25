const saludo = "hello";

//agrega letras en la posicion que se indica despues de la posicion del tamano del string
//hello tiene 5 letras, empezara a rellenar desde la posicion 6
console.log(saludo.padStart(20, "_"));
console.log(saludo.padEnd(20, "_"));
