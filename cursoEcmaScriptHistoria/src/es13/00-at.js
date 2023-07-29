const arr = ["one", "two", "three", "four", "five", "six"];

let size = arr.length - 1;
console.log(arr[size]);

console.log(arr.at(-1));

//flat retorna los elementos de un arrray incluido sub arrays, ingresa la profundidad
console.log(arr.flat(1));