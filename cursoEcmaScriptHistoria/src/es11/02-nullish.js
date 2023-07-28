//ayuda a comprobar si una variable es nulo
const aNumber = 1;
const validate = aNumber ?? "esta nulo";

console.log(validate);

let nombre;
const validate1 = nombre ?? "esta vacio";
console.log(validate1);