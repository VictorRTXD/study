/*El método matchAll de los strings devuelve un iterable con todas las
 coincidencias del string específico a partir de una expresión regular,
  colocada como argumento. */


const regex = /\b(apple)+\b/g;
const fruit =  "apple, banana, kiwi, apple, orange, etc., etc., etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

//tambien funciona con strings

const validador = "Luna";
const nombres = "Victor, Luna, Pepe Karol, Luna, VictorRTXD";
console.log("\n");

for (const match of nombres.matchAll(validador)) {
    console.log(match);
}