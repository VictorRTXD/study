import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };

const response2 = await fetch("https://api.escuelajs.co/api/v1/categories");
const categories = await response2.json();

export { categories };