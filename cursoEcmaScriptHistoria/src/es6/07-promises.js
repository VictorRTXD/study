//promises

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (0) {
            resolve("promise resolved");
        } else {
            reject("promise rejected");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));


const doAsyncStuffWithPromises = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resultado)
        }, 500);
    })
}

doAsyncStuffWithPromises(1, 4)
    .then(result => console.log(result));


//callbacks

const operation = (numero1, numero2, op) => {
    return op(numero1, numero2);
}

/*1 = numero1, 3 = numero2, [(a, b) => a + b] = op */
let sum = operation(1, 3, (a, b) => a + b)
operation(1, 3, (a, b) => a - b)
operation(1, 3, (a, b) => a * b)
console.log(`callback: ${sum}`);
