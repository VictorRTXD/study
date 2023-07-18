var objeto = {
    nombre : "Victor",
    edad : 20,
    apellido : "Macias",

    saludar : function() {
        console.log("hola! tengo " + this.edad)
        console.log(`Me apellido ${this.apellido}`)
    }
};

//clase 23

class auto {
    constructor(marca = "undefined", modelo = "undefined", ano = "undefined") {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    pitar = function() {
        console.log("pitando")
    }
}

var autoNuevo = new auto("Volkswagen", "beetle", 2009);
autoNuevo.pitar();
autoNuevo.marca;
var autoNuevo1 = new auto(); //gracias a los parametros del constructor es pudiera se opcional
                             // el ingreso de datos, sino, podriamos quitar esos undefined opcionales
                             //para hacer obligatorio el ingreso de datos 
/*reto: hacer 30 objetos con un loop */