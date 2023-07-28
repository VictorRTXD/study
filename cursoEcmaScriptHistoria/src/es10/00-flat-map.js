//El método flat devuelve un array donde los sub-arrays han sido propagados 
//hasta una profundidad especificada.

const array = [1, 6, 3, 4, 2, 0, 3, 9, 7, [1, 3, 6, 7, 9, [9, 5, 3, 7, 1]]];
console.log(array.flat(3)); 
console.log("\n");

//flatmap, l método flatMap es una combinación de los métodos map y flat. 
//Primero realiza la iteración de los elementos del array (como si fuera map), 
//y después los aplana en una sola profundidad (como si fuera flat).

const array1 = [1, 6, 3, 4, 9, 2, 1];
console.log(array1.flatMap(value => [value, value * 2]));