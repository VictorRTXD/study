/*Object.entries/keys/values nos devuelve un objeto con entradas, valores y llaves en un array, sin importar si es array u objeto */

const countrys = {
    mx: "mexico", 
    co : "colombia", 
    cl : "chile", 
    pe : "peru"
}

console.log(Object.entries(countrys));
console.log(Object.keys(countrys));
console.log(Object.values(countrys));

console.log("\n");

const arr = ["mexico", "colombia", "chile", "peru"];
console.log(Object.entries(arr));
console.log(Object.values(arr));
console.log(Object.keys(arr)); //devuelve index


const arr2 = [[1,2], [3,4]]
console.log(Object.fromEntries(arr2));