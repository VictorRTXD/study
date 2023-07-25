/*Cómo manipular los Sets
Para manipular estas estructuras de datos, existen los siguientes métodos:

add(value): añade un nuevo valor.
delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía 
o no el valor.has(value): retorna un booleano si existe o no el valor dentro del Set.
clear(value): elimina todos los valores del Set.
size: retorna la cantidad de elementos del Set. */

const list = new Set();
list.add("item 1");
list.add("item 2").add("item 3");
list.add("item 3")
console.log(list);


//Cómo quitar los elementos repetidos en una sola línea
const array = [1, 1, 2, 2, 3, 4, 4, 5,3,3,3,3,3,8]
const sinRepetidos = [... new Set(array)]
console.log(sinRepetidos);

const secondArray = [5,5,3,5,6,4,56,5,4,6,4,1,56,54,0,5,65,0,5,6,114,6,54,5];
const secondArrayNotRepeated = [... new Set(secondArray)]
console.log(secondArrayNotRepeated);