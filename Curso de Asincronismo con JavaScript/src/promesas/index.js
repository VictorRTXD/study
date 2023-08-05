/*las promesas tienen 3 estados: pendiente, cumplido (fullfiled), rechazado  */

//const promise = new Promise((resolve, reject) => resolve("hey"));

const cows = 9;
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`we have enough cows, ${cows}`);
    }  else {
        reject("there isnt no cows on the farm")
    }
});

countCows
    .then(response => console.log(response))
    .catch(error => console.log(error));

function saludador() {
    return new Promise((resolve, reject) => {
        if (0) {
            resolve("hola")
        } else {
            reject("adios")
        }
    })
}

saludador()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
    .finally(() => console.log("lsito putooooooo"));


function delay( message) {
    return new Promise((resolve) => setTimeout(resolve(message), 2000))
}

delay("puto").then(response => console.log(response));