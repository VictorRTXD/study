//con la siguiente funcion puedo crear numeros del 1 al 3 random
var pcChoice = Math.floor(Math.random() * 3) + 1;
var myChoice = prompt("1: papel \n 2: piedra \n 3: tijera");

if (myChoice == 1 && pcChoice == 2) 
    console.log("ganaste")
 else if (myChoice == 2 && pcChoice == 3) 
    console.log("ganaste")
 else if (myChoice == 3 && pcChoice == 1) 
    console.log("ganaste")
 else 
    console.log ("perdiste")

//
var myChoice = prompt("1: papel \n 2: piedra \n 3: tijera");
var pcChoice = Math.floor(Math.random() * 3) + 1;
console.log(pcChoice)
console.log(myChoice)

switch (true) {
    case (myChoice == 1 && pcChoice == 2):
        console.log("ganaste")
        break;
    case (myChoice == 2 && pcChoice == 3):
        console.log("ganaste")
        break;
    case (myChoice == 3 && pcChoice == 1):
        console.log("ganaste")
        break;
    case (myChoice === pcChoice) :
        console.log("empate");
        break;
    default:
        console.log("Perdiste")
        break;
}