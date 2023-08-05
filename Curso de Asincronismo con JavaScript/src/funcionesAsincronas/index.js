console.log("11");

const fnPromesa = () => {
    return new Promise((resolve, reject) => {
        (1)
        ? setTimeout(() => resolve("si jala, es resolve"), 2000)
        : setTimeout(() => reject(new Error("fuck")), 1500)
    })
}


const fnAsync = async() => {
    const resultado = await fnPromesa();
    console.log(resultado);
    console.log("finalizado");
}

console.log("11");
fnAsync();
console.log("11");