const firstFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("se logro"), 200)
            : reject("no se pudo")
    });
}

firstFunction()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
    .finally(() => console.log("finally"));


const firstFunctionAwait = async() => {
    try {
        const call = await firstFunction();
        console.log(call + "111");
    } catch (error) {
        console.log(error);
    }
}
firstFunctionAwait()

