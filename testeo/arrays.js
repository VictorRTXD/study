const products = [3, 2, 1];

// ACUMULADORES

// combina todo en un solo valor
const final = products.reduce((acc, product) => acc + product, 0)
console.log(final);

// TRANSFORMADORES

// Filtra elementos bajo una condición.
const final2 = products.filter(product => product > 1)
console.log(final2);

// Corta un pedazo del array.
const final3 = products.slice(0, 2)
console.log(final3);

// BUSCADORES

// Devuelve el primer elemento que cumpla la condición.
const final4 = products.find(product => product == 4)
console.log(final4);

// igual a find pero con index
const final5 = products.findIndex(product => product == 3)
console.log(final5);

// devuelve solo true o false
const final6 = products.includes(3)
console.log(final6);

// MUTAN ARRAY

// quitan o agregan al final
products.pop()
products.push(7)
console.log(products);

// quitan o agregan al inicio
products.shift()
products.unshift(9)
console.log(products);

console.log(products.sort());

const arr2 = ["a", "v", "e"]

const resultado = arr2.reduce((acc, name) => {
    acc[name] = true
    return acc
}, {})
console.log(resultado);
