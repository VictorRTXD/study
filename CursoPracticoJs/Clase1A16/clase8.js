var arrayDeSuscripcion =[
    "No tienes suscripcion",
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
]

let pos = 0;

if (pos >= 0 && pos < 4) {
    console.log(arrayDeSuscripcion[pos])
}

let objetoSuscripcion = {
    free : "Solo puedes tomar los cursos gratis",
    basic : "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert : "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

let suscripcion = "free";

/* objetoSuscripcion[suscripcion] es lo mismo que decir objetoSuscripcion.suscripcion 
que es lo mismo objetoSuscripcion.free done suscricpion esta asociado a "free" */
function tiposSuscripcion(suscripcion) {
    if (objetoSuscripcion[suscripcion]) {
        console.log(objetoSuscripcion[suscripcion]);
        return; //con return la funcion se detiene
    }

    console.warn("no existe la suscripcion");
}

//for ... in sirve para imprimir datos del objeto
for (const key in objetoSuscripcion) {
    console.log(key + " " + objetoSuscripcion[key])
}