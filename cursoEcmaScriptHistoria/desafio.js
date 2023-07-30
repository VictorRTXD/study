let arra = [1, 5, 3, 9, 1, 2, 7];
let arrb = [9, 6, 3, 7, 4, 1, 0];

function merge(arr1, arr2) {
    let arr3 = [];
    arr3 = [...arr1] + [...arr2]
    return arr3
}

console.log(merge(arra, arrb));

let input = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex", 
    "Complex is better than complicated",
  ]
  
function countWords(array) {
    return array.flatMap(line => line.split(' ')).length;
}
console.log(countWords(input));