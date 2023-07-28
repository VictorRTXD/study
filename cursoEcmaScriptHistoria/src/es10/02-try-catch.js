/*sirve para manejar errores, si no pasa la primera opcion, sucedera la segunda */
/*usare promesas para que todo el codigo se pueda ejecutar, si no, no lo hace */

function primerTry() {
    return new Promise((resolve) => {
        try {
            resolve(hello());
        } catch (error) {
            console.log(error);
        }
    })
}
primerTry().then(resolve => console.log(resolve));


function segundoTry() {
    return new Promise((resolve) => {
        try {
            resolve(anotherFunction());
        } catch (error) {
            throw new Error("madafacka");
        }
    })
}
segundoTry().then(resolve => console.log(resolve));


function thisFunctionIsGonnaWork() {
    console.log("************this works************");
}

try {
    thisFunctionIsGonnaWork();
} catch (error) {
    console.log(error);
}