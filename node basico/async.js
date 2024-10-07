async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("hola " + nombre);
            resolve(nombre);
            
        }, 1500);
    });
}

function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("adios " + nombre);
            resolve(nombre);
        }, 1000);
    });
}


function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("bla bla bla " );
            // resolve(nombre);
            reject("hay un error puto")
        }, 1000);
    });
}

await hola(nombre);