var frutas = ["manzanas", "platanos", "fresas"];
frutas.length = 4; //hace resizing del array
frutas[3] = "papas";
console.log(frutas[3]);

frutas.push("uvas"); //agrega un numero al final
console.log(frutas);
frutas.unshift("sandia"); //agrega un numero al inicio en vez del final

frutas.pop(); // elimina elemento al final
frutas.shift(); //elimina el elemento del inicio
frutas.splice(1,1); //elimina el elemento de index 1 una vez

frutas.indexOf("fresas");

/*                                 clase 25                        */
var articulos = [
    {nombre : "Bici", costo : 3000} ,
    {nombre : "Tv", costo : 2500}, 
    {nombre : "libro", costo : 320}, 
    {nombre : "celular", costo : 10000},
    {nombre : "laptop", costo : 20000},
    {nombre : "teclado", costo : 500},
    {nombre : "audifonos", costo : 1700}
];

//el metodo filter filtra los elementos de un arrray y los mete en otro array nuevo
//los datoss los agrega como objetos
//articulo puede llamarse de cualquier forma, solo le estamos dando nombre al index
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
articulosFiltrados

/*la funcion .map devuelve todos los resultados que se piden sin ser objetos*/
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
})

nombreArticulos[0]

/*                                      clase 26                        */
//.find Devuelve el primer elemento del array que cumpla con la condición dada
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "laptop"; 
})
encuentraArticulo

articulos.forEach(articulo => {
    console.log(articulo.nombre)
});

/* some() : Comprueba si al menos un elemento del array cumple con la condición que le damos 
devuelve true or false*/
var articulosBaratos = articulos.some(function name(articulo) {
    return articulo.costo <= 700;
})

articulosBaratos
