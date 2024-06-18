const PostUrl = "https://api.escuelajs.co/api/v1/products/"

const datos = {
    "title": "no me carga la imagen :(",
    "price": 100,
    "description": "this is a cool description",
    "categoryId": 2,
    "images": ["https://th.bing.com/th/id/OIP.69c52oYo8gvV47mmcJNdFwDfEX?w=166&h=209&c=7&r=0&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.69c52oYo8gvV47mmcJNdFwDfEX?w=166&h=209&c=7&r=0&o=5&pid=1.7"]
}
    fetch(PostUrl, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
