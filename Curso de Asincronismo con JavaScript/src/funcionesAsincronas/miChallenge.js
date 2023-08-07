const API = "https://api.escuelajs.co/api/v1";
import fetch from "node-fetch";


function promise() {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve("siempre ganando"), 200)
        : setTimeout(() => reject("tambien ganando, aun y en reject"), 250)
    })
}

const sincronizado = async() => {
    try {
        const response = await promise();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
sincronizado();

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

const data = async(urlAPI) => {
    let products = await fetchData(`${urlAPI}/products`);
    let product = await fetchData(`${urlAPI}/products/${products[0].id}`);
    let product2 = await fetchData(`${urlAPI}/products/${products[0].id}`);
    let category = await fetchData(`${urlAPI}/categories/${product.category.id}`)

    console.log(products);
    console.log("\n");
    console.log(product.title);
    console.log("\n");
    console.log(product2);
    console.log("\n");
    console.log(category.name);
}
data(API);