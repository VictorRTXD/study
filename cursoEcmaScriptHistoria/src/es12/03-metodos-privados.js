/* Los métodos privados consiste en limitar el acceso a propiedades
 y métodos agregando el caracter numeral ( #) están destinados a ser accesibles
  solo dentro del alcance de la clase o función en la que se definen.*/

class User {
    constructor(name, age, country) {
        console.log("nuevo usuario");
        this.name = name;
        this.age = age;
        this.country = country;
    }

    //metodos
    #saludar = function() {
        console.log(`hola, soy ${this.name} y tengo ${this.age}`);
    }

    nacionalidad = () => {
        console.log(this.country);
    }

    #getAge = function() {
        return this.age;
    }

    #setAge = function(newAge) {
        this.age = newAge
    }
}

const yo = new User("victor", 20, "mx");
yo.saludar();
yo.nacionalidad();
yo.setAge(21);
yo.saludar();