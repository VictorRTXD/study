import express from "express"
const router = express.Router()

router.get('/categories/:categoriesId/products/:productosId', (req, res) => {
  const { productosId, categoriesId } = req.params

  res.json({
    productosId,
    categoriesId,
  })
})

export default router;