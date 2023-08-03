/* XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs). 
Se debe instalar por la terminal xmlhttprequest

Existen 5 estados en un llamado XMLHttpRequest:
.

0 → Se ha inicializado.
1 → Loading (cargando).
2 → Se ha cargado.
3 → Procesamiento si existe alguna descarga.
4 → Completado.
.
📫 Métodos y propiedades:
.
xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).

xmlhttp.readyState → Retorna el estado de la petición.

xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.

xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)

xmlhttp.send() → Envía la petición.

Verbos: Los verbos indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor. Los Verbos http son:

GET → Solicita un recurso.
HEAD → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
POST → Sirve para la creación de recursos en el servidor.
PUT → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
PATCH → Actualiza parcialmente un recurso.
DELETE → Elimina un recurso.*/

/*
Funcion fetchData:
1. se crea uan variable xhttp instanciado por XMLHttpRequest()
2.se abre una peticion con xhttp
3. se crea una funcion xhttp.onreadystatechange en el que adentro llevara la logica sobre si todo salio correcto, hace el callback con la info en JSON y si no, un error
4. al final de la funcion, se manda la solicitud xhttp.send()
*/

/* esto se usaba en los inicios de JS, ahora se usa fetch que es una
implementacion mas moderna y simple para hacer una soicitud */


const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlAPI, true);

    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error de new error " + urlAPI);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//esto es un callback hell, nos genera problemas en la hora de identificar
//el codigo
fetchData(`${API}/products`, function(error1, data1) {
    //detener toda ejecucion si error
    if (error1)  return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if (error2)  return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

fetchData(`${API}/products`, function(error1, data1) {
    if (error1)  return console.error(error1);
    console.log(data1[1]);
});

/*NOTA, SI ANIDO FETCHDATA EN LA MISMA FUNCION, LOGRO QUE SE RESUELVAN DE FORMA CONSECUTIVA, SI NO, PUEDE QUE SE RESUELVAN EN CONCURRENCIA */