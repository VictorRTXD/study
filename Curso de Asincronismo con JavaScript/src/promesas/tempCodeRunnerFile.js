const API = "https://api.escuelajs.co/api/v1";

function getInfo(urlAPI) {
    return fetch(urlAPI);
}

getInfo(`${API}/products/224`)
    .then(response => response.json())
    .then(product => console.log(product))
    .catch(error => console.log(error));