// console.log(global);

let i = 0;
let intervalo = setInterval(function () {
    console.log("hola");
    if (i === 3)
        clearInterval(intervalo)
    i++;
}, 1000)

setImmediate(function() {
    console.log("adios");
})

global.miVariable = "esta es mi variable putos"

console.log(miVariable);
