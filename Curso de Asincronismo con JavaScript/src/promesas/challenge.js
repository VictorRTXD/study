/* FETCH por defecto es una promesa! por eso no hemos escrito la sintaxis de promesa
con new Promsie*/

import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

/*funcion que retorna productos, producto en particular
categoria que pertenece */

function fetchData(urlAPI) {
    return fetch(urlAPI);
}


/*fetchData(`${API}/products`)
    .then(response => response.json()) //trae la data en formato JSON
    .then(products => console.log(products))   // ahora muestra el JSON
    .then(() => console.log("hola"))
    .catch(error => console.log(error));
*/

fetchData(`${API}/products`) //se crea la peticion
    .then(response => response.json()) //se convierte formato JSON
    .then(products => { //se abre llaves para mas de una instruccion
        console.log(products)//aqui se imprime

        return fetchData(`${API}/products/${products[0].id}`) //se anida otro fetch
    })
    .then(response => response.json())//se convierte formato JSON
    .then(product => {
        console.log(product.title)//aqui se imprime

        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())//se convierte formato JSON
    .then(category => console.log(category.name))//aqui se imprime
    .catch(error => console.log(error))
    .finally(() => console.log("listo puto"));


// const API2 = "https://api.escuelajs.co/api/v1";

// function fetchUsers(urlAPI) {
//     return fetch(urlAPI);
// }

// fetchUsers(`${API2}/products/224`)
//     .then(response => response.json())
//     .then(usuarios => console.log(usuarios))
//     .catch(error => console.log(error))
