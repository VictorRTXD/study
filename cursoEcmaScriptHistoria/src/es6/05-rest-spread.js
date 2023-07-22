// arrays destructuring 

let fruits = ["apple", "banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

//objet destructuring

let user = {
    username : "victor",
    age : 20
};
let {username, age} = user;
console.log(username, age);
console.log(user.username, user.age);

// destructuring for-of loop

const arr = ["a", "b"];
for (const [index, element] of arr.entries()) {
    console.log(index, element);
}


// spread operator
//los ... sirven para destructurar elementos de array u objetos

let person = {
    name : "victor",
    age : 20
};
let country = "MX";

let data = {id: 232, ...person, country}
console.log(data);

//rest
// los ... srive para empaquetar los valoes enviados como un elemento, sea array u objeto en una funcion como parametro

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

let ob1 = {name:"Atena", food:"Leche"};
let ob2 = {age:2, color:"Café"};

function union(ob1, ob2) {
    let data = {...ob1, ...ob2};
    return data;
}
console.log(union(ob1, ob2));