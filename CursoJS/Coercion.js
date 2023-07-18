// Coercion: consiste en transformar un tipo de dato a otro de una variable, existen 2 tipos.
// Implicita: El lenguaje nos ayuda y cambia el tipo de valor por otro
// explicita: obligamos a que un valor de un tipo cambie a otro

//Implicita
4 + 7 //47
4 *  //28
2 + true //3
2 - false //2

//explicita
var a = 20;
var b = "1";
var c = String(a);
var d = Number(b);
var e = Boolean(b)//

/*ParseInt vs Number

ParseInt: Analiza la cadena desde el primer dígito, hasta que encuentre algo
que no sea dígito  y devuelve lo que haya analizado.

Number: Busca convertir toda la cadena en un número, por lo que al encontrarse 
con un elemento que no sea diginto nos dara como resultado NAN.*/ 