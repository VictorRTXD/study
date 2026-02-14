import express from "express";
import { faker } from "@faker-js/faker";

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send("soy filter")
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  res.json({
    name: "chile",
    price: 12,
    id,
  })
})

export default router;