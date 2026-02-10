import express from "express";
import { faker } from "@faker-js/faker";

const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/nueva-ruta', (req, res) => {
  res.send("nueva ruta!")
})

app.get('/products', (req, res) => {
  const products = []
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

app.get('/products/filter', (req, res) => {
  res.send("soy filter")
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params

  res.json({
    name: "chile",
    price: 12,
    id,
  })
})

app.get('/categories/:categoriesId/products/:productosId', (req, res) => {
  const { productosId, categoriesId } = req.params

  res.json({
    productosId,
    categoriesId,
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send("no hay parametros")
  }
})

app.listen(port, () => {
  console.log("corriendo en " + port);
})
