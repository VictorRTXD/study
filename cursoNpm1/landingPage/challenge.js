let url = "";//inserte url y verificara primero si cumple con parametros http, luego si funciona


async function runCode(url) {
    try {
        new URL(url);
    } catch(error) {
        throw new Error("Invalid URL");
    }

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Something was wrong");
    }
}

runCode(url);
console.log("se acabo");