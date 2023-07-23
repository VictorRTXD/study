//en el nombre el clave function tendra un *

function* iterator(arr) {
    for (const value of arr) {
        yield value;
    }
}

const it = iterator(["victor", "mini", "adrian", "mama", "luna"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);


function* getId(arr) {
    for (const value of arr) {
        yield value;
    }
}

const id = getId([545, 5542, 9895, 415051, 2114]);
id.next().value
id.next().value
id.next().value