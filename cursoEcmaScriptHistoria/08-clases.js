//delcarando clase
class User {
};

//instanciando clase
const newUser = new User();


class anotherUser {
   //constructor
   constructor(name, age) {
    console.log("nuevo usuario");
    this.name = name;
    this.age = age;
   }
   
    //metodos
    greetin() {
        return `my name is ${this.name} y tengo ${this.age}`;
    }

    speak() {
        return "hello";
    }

    get uAge() {
        return this.age;
    }

    set uAge(age) {
        this.age = age; 
    }
};
const user2 = new anotherUser("chuy", 15);
console.log(user2.greetin());
const bebeloper = new anotherUser("pepe", 15);
console.log(bebeloper.greetin());
const victor = new anotherUser("victor", 15);
console.log(victor.greetin());

console.log(victor.uAge);
victor.uAge = 20;
console.log(victor.uAge);