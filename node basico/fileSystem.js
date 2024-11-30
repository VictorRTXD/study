const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) console.error("no he podido escribirlo", err);
        else console.log("se ha escrito correctamente");
        
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

// leer(__dirname + "/leer.txt");
// escribir(__dirname + "/leer.txt", "soy nuevo y detergente", console.log);
borrar(__dirname + "/leer.txt", console.log)