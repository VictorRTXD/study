const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) //if con concepto terneario
            ? setTimeout(() => resolve("async!"), 2000)
            : reject(new Error("error!"));
    });
}

const anotherFunction = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log("yes");
}

console.log("before");
anotherFunction();
console.log("after");


const doAsyncFunction = (num1, num2) => {
    let resultado = num1 + num2;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resultado == 0) {
                reject(new Error("0 + 0 es 0, que suma tan naca, ahi le va su error"));
            } else {
                resolve(resultado)
            }
        }, 3000);
    });
}

const doAsyncSecondFunction = async() => {
    const asnwer = await doAsyncFunction(0, 0);
    console.log(asnwer);
    console.log("se logro tambien");
}

doAsyncSecondFunction();


const thirdFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("funcionando");
        }, 200);
    })
}

thirdFunction();

const thirdMiniFunciton = async() => {
    const status = await thirdFunction();
    console.log("a");
    console.log(status);
}
thirdMiniFunciton();