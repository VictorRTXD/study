var estudiantes = ["Victor", "Adrian", "Karol", "Luna"];

//fori normal
function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

for (let index = 0; index < array.length; index++) {
    saludar(estudiantes[index]);
}

// foreach
estudiantes.forEach(student => {
    saludar(student);
});

// otro for...of
for (var estudiante of estudiantes) {
    saludar(estudiante);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludar(estudiante);
    console.log(estudiantes)
}

/* RETO

var estudiantes = ["Nico", "Zule", "Santi"]

var deathcount = 2;

var nuevo = ["karol", "victor"]

for (let index = 0; index < deathcount; index++) {
    estudiantes.pop()
}

estudiantes = estudiantes.concat(nuevo) */

for (var array of myArray) {
    console.log(array)
}

var bolillos = {
    elemento : "arina",
    color : "cafe",
    tamano: "md",

    comer : function() {
        console.log("comiendo")
    },

    hornear : function() {
        console.log("que harda troya")
    }
};

function imprimirObjeto(objeto) {
    console.log("el color es: " + objeto.color + "esta hecho con " + objeto.elemento)
}