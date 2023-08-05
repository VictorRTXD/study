import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//funcion que transforma y retorna todo el urlAPI
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);//primero ir por los datos, recuerda que fetch es una promesa
    const data = await response.json(); //transformarlos 
    return data //hacerles return para luego imprimirlos
}

//funcion que obtiene el urlAPI y muestra su contenido
const anotherFunction = async(urlAPI) => {
    try {
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`)
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);