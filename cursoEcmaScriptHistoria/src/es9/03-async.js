async function* anotherGenerator () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello");

async function arrayOfNames(arr) {
    for await (let value of arr) {
        console.log(value);
    }
}

const names = arrayOfNames(["victor, karol, mini, luna"]);
console.log("after");

const precios = [5454, 15,56151,5158484, 451518 ,5789];

async function listadorDePrecios(array) {
    for await (let iterator of array) {
        console.log(iterator);
    }
}
listadorDePrecios(precios)