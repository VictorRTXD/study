/*Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y rebotará si todas las promesas son rechazadas. */

const promise1 = new Promise((resolve, reject) => resolve("estoy resuelto"));
const promise2 = new Promise((resolve, reject) => resolve("estoy resuelto y soy el del medio"));
const promise3 = new Promise((resolve, reject) => reject("estoy fucked"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));