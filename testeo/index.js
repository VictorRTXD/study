const PostUrl = "https://api.escuelajs.co/api/v1/products/"

const datos = {
    "title": "este es freddy chiquito, nunca pares de aprender",
    "price": 100,
    "description": "this is a cool description",
    "categoryId": 2,
    "images": ["https://images.pexels.com/photos/19101653/pexels-photo-19101653/free-photo-of-ciudad-arte-francia-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
}
    fetch(PostUrl, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
