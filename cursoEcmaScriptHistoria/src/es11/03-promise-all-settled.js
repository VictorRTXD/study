/*Promise.allSettled() permite manejar varias promesas, que devolverá un array 
de objetos con el estado y el valor de cada promesa, haya sido 
resuelta o rechazada */

const promise1 = new Promise((resolve, reject) => reject("la promesa 1 fallo"));
const promise2 = new Promise((resolve, reject) => resolve("la promesa 2 se rifo"));
const promise3 = new Promise((resolve, reject) => resolve("la promesa 3 se rifo"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(reject => console.log(reject));