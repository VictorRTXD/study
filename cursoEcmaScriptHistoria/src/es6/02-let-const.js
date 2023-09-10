var lastName = "david";
lastName = "Victor";
console.log(lastName);

let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

const animal = "dog";
animal = "cat";
console.log(animal);

const fruits = () => {
    let fruit4;
    if (true) {
        var fruit1 = "apple";
        let fruit2 = "kiwi";
        const fruit3 = "bannana";
        fruit4 = "mango"
    }
    //no vamos a tener errror porque var tiene un scope global
    console.log(fruit1);

    //en estos si vamos a tener un error porque const y let tienen un scope de bloque, como 
    //estan adentro del bloque del if, fuera de el no se pueden acceder
    console.log(fruit2);
    console.log(fruit2);

    console.log(fruit4)
}

fruits();

cholo = 6
var cholo
var cholo = 9
console.log(cholo);

pele = 9
let pele;
pele = 12;
console.log(pele);