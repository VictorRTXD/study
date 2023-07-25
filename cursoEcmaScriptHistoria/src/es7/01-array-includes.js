//nos ayuda validar si existe algun numero en el array
let arr = [1, 3, 2, 4, 65, 7, 8];
console.log(arr.includes(999)); //false
console.log(arr.includes(1)); //true

const list = ["victor", "mini", "luna"];
console.log(list.includes("victor"));

const myObjetc = {
    user : "victor",
    age : 20,
    country : "mx",

    saySomething : function () {
        return `Soy ${this.user}`
    }
};

console.log(myObjetc.saySomething());

class CreaObjetos {
    constructor(nombre = "", edad = NaN, ciudad = "") {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    estudiar() {
        console.log("estiudiando");
    }

    jugar = () => {
        return "jugando";
    } 
}

let victor = new CreaObjetos("victor", 20, "mx");
console.log(victor.jugar());
