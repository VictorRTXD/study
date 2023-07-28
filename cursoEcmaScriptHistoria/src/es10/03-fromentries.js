/*cuando recivimos un array de arrays, en ocaciones asi llega de un API o de alguna 
transformacion de datos, utilizar estos recursos nos ayudara a ser mas eficientes en mostrar o 
guardar la info++*/

const entries = new Map([["name", "victor"], ["age", 20], ["country", "mx"]]);
const entries1 = [["name", "victor"], ["age", 20], ["country", "mx"]]
console.log(Object.fromEntries(entries1));
