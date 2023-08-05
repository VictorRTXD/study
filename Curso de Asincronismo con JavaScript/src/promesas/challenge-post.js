//ahora fetch sera designada a una variable con 2 argumentos, el url 
// y una estructura de datos para postear info    

/*en mode se indica si se permite solicitudes de origen cruzado, por defecto se pone cors (cross-origin resource sharing), cors es un sistema que consiste en transmitir HTTP headers, determina cuales navegadores bloquean el acceso del código JavaScript frontend a las respuestas de las solicitudes de origen cruzado.  https://developer.mozilla.org/en-US/docs/Glossary/CORS*/

import fetch from "node-fetch";

/* EJEMPLO POST */

/* borrar simbolo comentario
const API = "https://api.escuelajs.co/api/v1"; */
function fetchPost(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: "POST", // verbo http
        mode: "cors",
        credentials: "same-origin",//(same origin) si no hay autenticacion, no esta pasando nada
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Chascarrillo",
    "price": 0.009,
    "description": "Yo soy de esas personas que cuando camina, mueve las piernas",
    "categoryId": 1,
    "images": ["https://images.pexels.com/photos/2838511/pexels-photo-2838511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  }

fetchPost(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))


/* EJEMPLO PUT */
/* borrar simbolo comentario
const API = "https://api.escuelajs.co/api/v1"; */
function putFetch(urlAPI, data) {
    const put = fetch(urlAPI, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return put;
}

const dataUpdate = {
    "title": "Ch@scarrill0",
    "price": 100000000000001
}

putFetch(`${API}/products/224`, dataUpdate)
    .then(response => response.json())
    .then(update => console.log(update))
    .catch(error => console.log(error))


/* EJEMPLO DELETE */
/* borrar simbolo comentario
const API = "https://api.escuelajs.co/api/v1"; */

function deleteFetch(urlAPI, data) {
    const response = fetch(urlAPI, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response;
}

deleteFetch(`${API}/products/62`)
    .then(response => response.json())
    .then(deleted => console.log(deleted))
    .catch(error => console.log(error));


/* EJEMPLO GET */
/* borrar simbolo comentario
const API = "https://api.escuelajs.co/api/v1"; */

function getInfo(urlAPI) {
    return fetch(urlAPI);
}

getInfo(`${API}/products/224`)
    .then(response => response.json())
    .then(product => console.log(product))
    .catch(error => console.log(error));