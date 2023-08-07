const API = "https://api.escuelajs.co/api/v1";
import fetch from "node-fetch";

//ejemplo 1
function fetchData(urlAPI) {
    return fetch(urlAPI);
}

fetchData(`${API}/products`)
        .then(response => response.json())
        .then(data => {
            function* generator() {
                yield data;
            }

            let it = generator();
             console.log(it.next());
         })
         .catch(error => console.log(error));

//ejemplo 2, (mi favorito)
async function* fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    yield await response.json();
}

fetchData(`${API}/products`).next()
    .then(value => console.log(value))