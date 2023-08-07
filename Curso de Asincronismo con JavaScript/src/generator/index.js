/*Un generador en JS es una funcion generadora que muestra un 
objeto iterable generator, usa la palabra reservada yield para pausar y 
ranudar una funcion generadora */

function* generator() {
    while (true) {
        let number = Math.random();
        yield number;
    }
}

let miNumero = generator();
console.log(miNumero.next());
console.log(miNumero.next());
console.log(miNumero.next());


function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let miGen = gen();
console.log(miGen.next().value);
console.log(miGen.next().value);
console.log(miGen.next());


function* iteratle(arr) {
    for (const iterator of arr) {
        yield iterator;
    }
}

const it = iteratle(["victor", "karol", "mini", "luna"]);

