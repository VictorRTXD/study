/*Top level await permite utilizar la palabra reservada await, 
sin estar dentro de una función asíncrona con async. Sin embargo, 
únicamente se puede utilizar await en la parte superior del archivo de un módulo. */

import { products } from "./products.js";
import { categories } from "./products.js";

console.log(products);
console.log("hey \n");

console.log(categories);